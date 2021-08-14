// ==UserScript==
// @name                youtube_download
// @description         youtube_download
// @version             0.0.3
// @namespace           https://github.com/alchemy-works
// @author              Alchemy Works
// @include             /^https:\/\/(www)\.youtube\.com\/.*$/
// @icon                https://www.google.com/s2/favicons?domain=youtube.com
// @license             MIT
// @run-at              document-end
// @grant               none
// ==/UserScript==

;(function () {
    'use strict'

    function tryAddDownloadLink(count) {
        if (!count) {
            return
        }
        const infoText = document.querySelector('#info-text')
        if (!infoText) {
            setTimeout(() => tryAddDownloadLink(count - 1), 3000)
            return
        }

        const cssText = `
      .video-download-link {
        font-size: 14px;
        text-decoration: none;
        color: #606060;
        margin-left: 8px;
      }

      .video-download-link:hover {
        color: #404040;
      }
    `

        const style = document.createElement('style')
        style.innerHTML = cssText;
        document.head.appendChild(style);

        const link = document.createElement('a')
        link.href = location.href.replace('youtube.com', 'youtubepp.com')
        link.innerText = '下载'
        link.target = '__blank'
        link.classList.add('video-download-link')

        infoText.appendChild(link)
    }

    tryAddDownloadLink(9)
})();