import { Projekt1Page } from './app.po';

describe('projekt1 App', () => {
  let page: Projekt1Page;

  beforeEach(() => {
    page = new Projekt1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
