// ==UserScript==
// @name                youtube_resume
// @description         youtube_resume
// @version             0.0.1
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

    function resume() {
        const resumeTextNode = document.querySelector('')
        if (!resumeTextNode) {
            return
        }
        const resumeConfirmButton = document.querySelector('')
        if (!resumeConfirmButton) {
            return
        }
        console.info(`[${new Date().toISOString()}]`, 'Resume playback')
        resumeConfirmButton.click()
    }

    setInterval(() => {
        resume()
    }, 3000)
})();
