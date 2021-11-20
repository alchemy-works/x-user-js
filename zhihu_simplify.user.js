// ==UserScript==
// @name                zhihu_simplify
// @description         zhihu_simplify
// @version             0.1.2
// @namespace           https://github.com/alchemy-works
// @author              Alchemy Works
// @include             /^https:\/\/(www)\.zhihu\.com\/.*$/
// @require             https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js
// @icon                https://www.google.com/s2/favicons?domain=zhihu.com
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

      .GlobalSideBar {
        display: none !important;
      }

      .Topstory-mainColumn {
        width: 100% !important;
        margin-right: 0 !important;
        transition: width 250ms ease !important;
      }

      .Question-sideColumn {
        display: none !important;
      }

      .Question-mainColumn {
        width: 100% !important;
        transition: width 250ms ease !important;
      }

      .Pc-feedAd-container {
        display: none !important;
      }
      
      .Question-main {
        width: unset !important;
        max-width: 1000px;
      }
    `
})();