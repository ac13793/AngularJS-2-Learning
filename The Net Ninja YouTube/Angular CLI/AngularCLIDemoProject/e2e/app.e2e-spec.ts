import { AngularCLIDemoProjectPage } from './app.po';

describe('angular-clidemo-project App', () => {
  let page: AngularCLIDemoProjectPage;

  beforeEach(() => {
    page = new AngularCLIDemoProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
