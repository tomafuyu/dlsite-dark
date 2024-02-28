// ==UserScript==
// @name         dlsite darkmode
// @namespace    http://tampermonkey.net/
// @version      2024-02-28
// @description  try to take over the world!
// @author       toma*fuyu
// @match        https://www.dlsite.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dlsite.com
// @grant        none
// ==/UserScript==

(function() {
    "use strict";
    
    const $$ = (q, a=false) => a ?
        document.querySelectorAll(q)
        : document.querySelector(q);
    
    /* ===== User Settings ===== */
    const b = "#111";
    const c = "aliceblue";
    /* ===== / User Settings ===== */
    
    $$("body").style.color = c;
    $$("body").style.backgroundColor = b;

    // header
    $$("input#search_text").style.color = c;
    $$("input#search_text").style.backgroundColor = b;
    $$("div.headerCore-mainInner").style.backgroundColor = b;
    $$("div.floorSubNav").style.backgroundColor = b;

    // left
    if (!location.href.includes("work"))
        $$("ul.list_content_text.type-icon").style.backgroundColor = b;

    $$("#container").style.color = c;
    $$("#wrapper").style.color = c;
    
    $$("head").innerHTML += `
        <style>
            #left li a {
                color: aliceblue;
                &:hover {
                    background-color: #444;
                }
            }
            a.work_name,
            .work_name a {
                color: lightskyblue;
            }
        </style>
    `;
})();
