import { MeanBlogPage } from './app.po';

describe('mean-blog App', function() {
  let page: MeanBlogPage;

  beforeEach(() => {
    page = new MeanBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
