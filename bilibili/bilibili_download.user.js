// ==UserScript==
// @name                bilibili_download
// @description         bilibili_download
// @version             0.0.1
// @namespace           https://github.com/alchemy-works
// @author              Alchemy Works
// @include             /^https:\/\/(www)\.bilibili\.com\/.*$/
// @icon                https://www.google.com/s2/favicons?domain=bilibili.com
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
        const container = document.querySelector('.rigth-btn')
        const peerElement = document.querySelector('.rigth-btn :nth-child(2)')

        if (!container) {
            setTimeout(() => tryAddDownloadLink(count - 1), 3000)
            return
        }

        const link = document.createElement('a')
        link.innerText = '下载'
        link.classList.add('appeal-text')
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

        container.insertBefore(link, peerElement)
    }

    tryAddDownloadLink(9)
})();