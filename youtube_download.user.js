// ==UserScript==
// @name                youtube_download
// @description         youtube_download
// @version             0.1.0
// @namespace           https://github.com/alchemy-works
// @author              Alchemy Works
// @include             /^https:\/\/(www)\.youtube\.com\/.*$/
// @require             https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js
// @icon                https://www.google.com/s2/favicons?domain=youtube.com
// @license             MIT
// @run-at              document-end
// @grant               none
// ==/UserScript==

;(function () {
    'use strict'

    if (!window.emotion) {
        return
    }
    const { injectGlobal } = window.emotion

    injectGlobal`
      .video-download-link {
        font-size: 14px;
        text-decoration: none;
        color: #606060;
        margin-left: 8px;

        &:hover {
          color: #404040;
        }
      }
    `

    function createDownloadLink() {
        const link = document.createElement('a')
        link.href = location.href.replace('youtube.com', 'youtubepp.com')
        link.innerText = '下载'
        link.target = '__blank'
        link.classList.add('video-download-link')
        return link
    }

    function checkAndAddDownloadLink(count) {
        if (!count) {
            return
        } else {
            setTimeout(() => checkAndAddDownloadLink(count - 1), 3000)
        }

        const targetElement = document.querySelector('.video-download-link')
        if (targetElement) {
            return
        }

        if (!location.href.includes('/watch')) {
            return
        }

        const container = document.querySelector('#info-text')
        if (!container) {
            return
        }

        const link = createDownloadLink()
        container.appendChild(link)
    }

    setTimeout(() => {
        checkAndAddDownloadLink(9)
    }, 3000)
})();