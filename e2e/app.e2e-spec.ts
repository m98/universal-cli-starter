import { UniversalCliPage } from './app.po';

describe('universal-cli App', () => {
  let page: UniversalCliPage;

  beforeEach(() => {
    page = new UniversalCliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
