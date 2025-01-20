// ==UserScript==
// @name         Auto Close Tabs for Main Domain Names
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Automatically closes tabs if the main domain name matches specific names.
// @author       Tung Do
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const isBlockedDomain = (hostname) => {
        return /^(.*\.)?(shopee|lazada|about:blank)\./.test(hostname);
    };
    if (isBlockedDomain(window.location.hostname)) {
        window.close();
    }
})();
