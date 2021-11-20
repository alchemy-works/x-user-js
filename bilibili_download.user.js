// ==UserScript==
// @name                bilibili_download
// @description         bilibili_download
// @version             0.1.1
// @namespace           https://github.com/alchemy-works
// @author              Alchemy Works
// @include             /^https:\/\/(www)\.bilibili\.com\/.*$/
// @require             https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js
// @icon                https://www.google.com/s2/favicons?domain=bilibili.com
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

      .international-header {
        min-width: 800px !important;
      }

      .v-wrap {
        min-width: 800px !important;
        padding: 0 !important;
      }

      .l-con {
        width: unset !important;
      }

      .r-con {
        display: none !important;
      }
    `

    function createDownloadLink() {
        const link = document.createElement('a')
        link.innerText = '下载'
        link.classList.add('appeal-text')
        link.classList.add('video-download-link')
        link.href = 'https://www.videotosave.com/bilibili-video-downloader/'
        link.target = '__blank'
        link.addEventListener('click', () => {
            const input = document.createElement('input')
            input.setAttribute('readonly', 'readonly')
            input.setAttribute('value', location.href)
            document.body.appendChild(input)
            input.select()
            if (document.execCommand('copy')) {
                document.execCommand('copy')
            }
            document.body.removeChild(input);
        })
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

        if (!location.href.includes('/video')) {
            return
        }

        const container = document.querySelector('.rigth-btn')
        const peerElement = document.querySelector('.rigth-btn :nth-child(2)')

        if (!container) {
            return
        }

        const link = createDownloadLink()
        container.insertBefore(link, peerElement)
    }

    setTimeout(() => {
        checkAndAddDownloadLink(9)
    }, 3000)
})();