import { AutorizacionAppPage } from './app.po';

describe('autorizacion-app App', () => {
  let page: AutorizacionAppPage;

  beforeEach(() => {
    page = new AutorizacionAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
