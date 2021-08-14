// ==UserScript==
// @name                zhihu_simplify
// @description         zhihu_simplify
// @version             0.0.6
// @namespace           https://github.com/alchemy-works
// @author              Alchemy Works
// @include             /^https:\/\/(www)\.zhihu\.com\/.*$/
// @icon                https://www.google.com/s2/favicons?domain=zhihu.com
// @license             MIT
// @run-at              document-end
// @grant               none
// ==/UserScript==

;(function () {
    'use strict'

    const cssText = `

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
    `

    const style = document.createElement('style')
    style.innerHTML = cssText;
    document.head.appendChild(style);
})();