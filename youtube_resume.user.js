// ==UserScript==
// @name                youtube_resume
// @description         youtube_resume
// @version             0.0.4
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
    const $ = document.querySelector.bind(document)

    function resume() {
        const popupContainer = $('ytd-popup-container')
        const resumeTextNode = $('ytd-popup-container yt-formatted-string.line-text')
        if (!resumeTextNode || resumeTextNode.textContent !== '视频已暂停。是否继续观看？') {
            return
        }
        const resumeConfirmButton = $('ytd-popup-container tp-yt-paper-button')
        if (!resumeConfirmButton) {
            return
        }
        resumeConfirmButton.click()
        setTimeout(() => {
            if (popupContainer) {
                popupContainer.innerHTML = ''
            }
        })
        console.info(`[${new Date().toISOString()}]`, 'Resume playback')
    }

    setInterval(() => {
        resume()
    }, 3000)
})();
