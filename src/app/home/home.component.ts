import { Component, ElementRef, Renderer, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

    @ViewChild("close_button") close_button: ElementRef;
    isImageLoaded: boolean;

    onLoadAction() {
        this.isImageLoaded = true;
    }

    constructor(private _renderer: Renderer, private _location: PlatformLocation) {

    }

    ngAfterViewInit() {
        // Handling browsr back event: When user clicked on browser back button without closing the modal.
        this._location.onPopState(
            () => {
                this._renderer.invokeElementMethod(this.close_button.nativeElement, "click");
            }
        );

    }
}
