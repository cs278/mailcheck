/*
 * Mailcheck https://github.com/Kicksend/mailcheck
 * Author
 * Derrick Ko (@derrickko)
 *
 * License
 * Copyright (c) 2012 Receivd, Inc.
 *
 * Licensed under the MIT License.
 *
 * v 1.1
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'mailcheck'], factory);
  } else {
    if (root.jQuery && root.Kicksend.mailcheck) {
      factory(root.jQuery, root.Kicksend.mailcheck);
    }
  }
}(this, function($, mailcheck) {
  $.fn.mailcheck = function(opts) {
    var self = this;
    if (opts.suggested) {
      var oldSuggested = opts.suggested;
      opts.suggested = function(result) {
        oldSuggested(self, result);
      };
    }

    if (opts.empty) {
      var oldEmpty = opts.empty;
      opts.empty = function() {
        oldEmpty.call(null, self);
      };
    }

    opts.email = this.val();
    mailcheck.run(opts);
  }
}));
