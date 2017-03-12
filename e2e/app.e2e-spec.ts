import { ConceptsOfAngular2Page } from './app.po';

describe('concepts-of-angular2 App', () => {
  let page: ConceptsOfAngular2Page;

  beforeEach(() => {
    page = new ConceptsOfAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
