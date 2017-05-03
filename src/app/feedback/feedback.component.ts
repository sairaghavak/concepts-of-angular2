import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  postUrl: string;
  showGlobalError: boolean = false;
  showGlobalSuccess: boolean = false;
  showEmailErrorMessage: boolean = false;
  @ViewChild('email') emailField: ElementRef;
  @ViewChild('feedBackForm') feedBackForm: NgForm;

  constructor(private _renderer: Renderer, private _http: Http) { }

  ngOnInit() {
    this.postUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfPhcHhBuMX-A6u9YlZjr1Gxx_G7opj4D6pJNXv3-L9-dbsrA/formResponse";
  }

  onSubmit(feedBackFormValue: any) {
    // Clear previous form submission success message
    if (this.showGlobalSuccess) {
      this.showGlobalSuccess = false;
    }

    if (this.checkMandatoryFields() && this.isEmailFieldValid()) {
      this.submitToGoogleForms(feedBackFormValue);
    }
  }

  checkMandatoryFields() {
    let status = false;
    let allFormControls = this.feedBackForm.controls;
    for (let eachFormControl in allFormControls) {
      if (allFormControls[eachFormControl].errors !== null) {
        // That means there is validation error, required field is not filled.
        this.showGlobalError = true;
        status = false;
        break;
      } else {
        this.showGlobalError = false;
        status = true;
      }
    }
    return status;
  }

  isEmailFieldValid() {
    // Check if email field has no red style and no error message 
    console.log(this.showEmailErrorMessage); // when there is error message it will display true. For success it should be false.
    console.log(this.emailField.nativeElement.classList.contains('email_success'));
    return !this.showEmailErrorMessage && this.emailField.nativeElement.classList.contains('email_success');
  }

  submitToGoogleForms(formData: JSON) {
    console.log('Form successfuly submitted to google forms....' + formData);
    this.showGlobalSuccess = true;
    console.log("form data length... " + formData);

    // real submit here 
    let data = new URLSearchParams();
    for (var key in formData) {
      if (formData.hasOwnProperty(key)) {
        console.log(key + " -> " + formData[key]);
        data.append(key, formData[key]);
      }
    }

    this._http
      .post(this.postUrl, data)
      .subscribe(data => {
        console.log('Congrats your feedback is recorded...');
      }, error => {
        console.log(error.json());
      });

    if (this.feedBackForm.submitted) {
      // Remove the email_success class from the email field.
      this._renderer.setElementClass(this.emailField.nativeElement, 'email_success', false);
      this.feedBackForm.reset();
    }

  }

  onKeyUpValidateEmail(emailValue: string) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(emailValue)) {
      this.showEmailErrorMessage = true;
      this._renderer.setElementClass(this.emailField.nativeElement, 'email_success', false);
      this._renderer.setElementClass(this.emailField.nativeElement, 'email_error', true);
    } else {
      this.showEmailErrorMessage = false;
      this._renderer.setElementClass(this.emailField.nativeElement, 'email_success', true);
      this._renderer.setElementClass(this.emailField.nativeElement, 'email_error', false);
    }
  }

}
