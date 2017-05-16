import { ExpressexamplePage } from './app.po';

describe('expressexample App', () => {
  let page: ExpressexamplePage;

  beforeEach(() => {
    page = new ExpressexamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
