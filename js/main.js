(function ($) {
  var pageIdentifier = {
    login: '#login-page',
    register: '#register-page',
    feed: '#feed-page',
    profile: '#profile-page',
    settings: '#settings-page',
  };

  /**
   * Initialize app events
   */
  $(window).on('load', windowLoadHandler);

  /**
   * Window load handler
   */
  function windowLoadHandler() {
    var {login, register, feed, profile, settings} = pageIdentifier;

    if ($(login).length) {
      // $('#login-form').on('submit', e => {
      //   e.preventDefault();
      //   console.log($('#login-form').serialize());
      //   window.location.href = 'feed.html';
      // });
      new functions.LoginPage().init();
    }
    if ($(register).length) {
      // $('#login-form').on('submit', e => {
      //   e.preventDefault();
      //   console.log($('#login-form').serialize());
      //   window.location.href = 'feed.html';
      // });
      new functions.SignupPage().init();
    }

    if ($(feed).length) {
      new functions.FeedPage().init();
    }
    if ($(profile).length) {
      new functions.ProfilePage().init();
    }
  }
})(jQuery);
