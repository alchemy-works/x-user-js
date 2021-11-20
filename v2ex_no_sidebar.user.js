// ==UserScript==
// @name                v2ex_no_sidebar
// @description         v2ex_no_sidebar
// @version             0.0.1
// @namespace           https://github.com/alchemy-works
// @author              Alchemy Works
// @include             /^https:\/\/(www)?\.v2ex\.com\/.*$/
// @require             https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js
// @icon                https://www.google.com/s2/favicons?domain=v2ex.com
// @license             MIT
// @run-at              document-end
// @grant               none
// ==/UserScript==

;(function () {
    'use strict'
    if (!window['emotion']) {
        return
    }
    const { injectGlobal } = window['emotion']

    injectGlobal`
        #Rightbar {
            display: none !important;
        }
        
        #Main {
            margin: 0 20px 0 20px !important;
        }
    `
})();