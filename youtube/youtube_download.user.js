// ==UserScript==
// @name                youtube_download
// @description         youtube_download
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
    const title = document.querySelector('.title.ytd-video-primary-info-renderer')
    if (!title) {
        return
    }

    title.style.display = 'flex'
    title.style.justifyContent = 'space-between'
    title.style.alignItems = 'center'

    function createLinkElement() {
        const link = document.createElement('a')
        link.href = location.href.replace('youtube.com', 'youtubepp.com')
        link.innerText = '下载'
        link.target = '__blank'
        link.style.fontSize = '12px'
        link.style.textDecoration = 'none'
        link.style.color = '#065fd4'
        return link
    }

    const link = createLinkElement()
    title.appendChild(link)
})();