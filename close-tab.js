// ==UserScript==
// @name         Auto Close Tabs for Main Domain Names
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Automatically closes tabs if the main domain name matches specific names.
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    (() => {
        const isBlockedDomain = (hostname) => {
            return /^(.*\.)?(shopee|lazada)\./.test(hostname);
        };

        const blockPage = () => {
            if (isBlockedDomain(window.location.hostname)) {
                window.close();
            }
        };

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            blockPage();
        } else {
            document.addEventListener(
                'DOMContentLoaded',
                blockPage,
                false,
            );
        }
    })();
})();
