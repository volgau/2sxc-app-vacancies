"use strict";

(function ($) {
    $(document).ready (function () {
        function toggleExpandCollapse(target) {
            var btn = $(target).prev("button");
            btn.children("span").toggleClass("d-none");
        }
        $(".vacancy-collapse")
            .on ("shown.bs.collapse", function () {
                toggleExpandCollapse(this);
            })
            .on ("hidden.bs.collapse", function () {
                toggleExpandCollapse(this);
            });
    });
} (jQuery));