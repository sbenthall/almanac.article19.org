/*
@licstart
Copyright (C) 2019-2022 Ulrike Uhlig

    The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.
@licend
*/

$(function($){
    // helper function for mobile layout
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('body').addClass('mobile').removeClass('desktop');
    }
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('body').addClass('safari');
    }

    // easy click on orgs and groups from list
    $('#org-list .org, #post-list .post').click(function() {
        let href = $(this).children().find('.permalink').attr('href');
        if(href !== undefined) {
            window.location.href = href;
        }
    });
    
    // mobile: logo above text
    $(".mobile #post .org .logo").prependTo('.mobile #post .org #main-text .org-description').addClass('logo-moved');
    $(".mobile.post .logo").appendTo('.mobile.post #main-text .wg-description').addClass('logo-moved');

    $('.main-menu li').click(function() {
        if($(this).children("ul").length) {
            $(this).children("ul").slideToggle(500);
        }
    });

});
