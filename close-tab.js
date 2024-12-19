// ==UserScript==
// @name         Auto Close Tabs for Main Domain Names
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Automatically closes tabs if the main domain name matches specific names.
// @author       Tung Do
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of main domain names to block
    const blockedDomainNames = [
        'shopee',
        'lazada'
    ];

    // Extract the main domain name (before the first dot)
    const hostname = window.location.hostname;
    const mainDomainName = hostname.split('.').slice(-2, -1)[0];

    // Check if the main domain matches any in the blocked list
    if (blockedDomainNames.includes(mainDomainName)) {
        window.close();
    }
})();

