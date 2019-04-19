module.exports = {
  elements: {
    header: {
      selector: 'header'
    },
    reduxBankLink: {
      selector: 'a.item'
    }
  },
  props: {
    linkLabel: 'Redux Bank'
  },
  commands: [
    {
      clickReduxBank: function () {
        const landingPage = this.api.page.BankLanding();

        this.waitForElementVisible('@reduxBankLink');
        this.click('@reduxBankLink');

                //wait for a unique element on landing page
        landingPage.waitForElementVisible(landingPage.el('@tableHeaders', 1));
      }
    }
  ]
};