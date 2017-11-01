import { HrAppPage } from './app.po';

describe('hr-app App', function() {
  let page: HrAppPage;

  beforeEach(() => {
    page = new HrAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
