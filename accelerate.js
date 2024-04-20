// ==UserScript==
// @name         视频倍速调整
// @namespace    https://www.bilibili.com/video/
// @version      0.1
// @description  按下 'g' 键调整当前视频的倍速
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', function(e) {
        if (e.key === 'g') {
            const videos = document.querySelectorAll('video');

            videos.forEach(function(video) {
                if (isElementInViewport(video)) {
                    if (video.playbackRate < 2) {
                        video.playbackRate += 0.25;
                    } else {
                        video.playbackRate = 0.75;
                    }

                    console.log('当前视频倍速：', video.playbackRate);
                }
            });
        }
        if (e.key === 'h') {
            const videos = document.querySelectorAll('video');

            videos.forEach(function(video) {
                if (isElementInViewport(video)) {
                    if (video.playbackRate > 0.75) {
                        video.playbackRate -= 0.25;
                    } else {
                        video.playbackRate = 2;
                    }

                    console.log('当前视频倍速：', video.playbackRate);
                }
            });
        }
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
})();