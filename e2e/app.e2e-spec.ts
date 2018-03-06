import { Campgrounds.SpaPage } from './app.po';

describe('campgrounds.spa App', () => {
  let page: Campgrounds.SpaPage;

  beforeEach(() => {
    page = new Campgrounds.SpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
