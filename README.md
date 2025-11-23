# Publix Cupon Clipper

This script is designed to automatically go through [Publix coupons](https://www.publix.com/savings/digital-coupons) and click them each automatically to save you the trouble. 

This script was intended to work with [Tampermonkey](https://www.tampermonkey.net/index.php) but should work as long it is loaded onto the site somehow. 

Here is an example Tampermonkey script:
```
// ==UserScript==
// @name         Publix Clip Coupons
// @namespace    http://tampermonkey.net/
// @version      2025-10-04
// @description  try to take over the world!
// @author       You
// @match        https://www.publix.com/savings/digital-coupons
// @match        https://www.publix.com/savings/digital-coupons/
// @match        https://www.publix.com/savings/digital-coupons?*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/DavidSimmerman/publix-cupon-clipper@main/clipper.js';
    document.head.appendChild(script);
})();
```
