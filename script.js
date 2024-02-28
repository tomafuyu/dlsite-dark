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
    
    /* ===== User Settings ===== */
    const b = "#111";
    const c = "aliceblue";
    const link = "lightskyblue";
    const hoverBG = "#444";
    /* ===== / User Settings ===== */

    const $$ = (q, a=false) => a ?
        document.querySelectorAll(q)
        : document.querySelector(q);

    const setStyle = (e, s, v) => $$(e) && ($$(e).style[s] = v);
    const setColor = (e) => setStyle(e, "color", c);
    const setBGC = (e) => setStyle(e, "backgroundColor", b);
    const setBoth = (e) => {
        setColor(e);
        setBGC(e);
    };
    
    setBoth("body");

    // header
    setBoth("input#search_text");
    setBGC("div.headerCore-mainInner");
    setBGC("div.floorSubNav");

    // left
    setBGC("ul.list_content_text.type-icon");

    setColor("#container");
    setColor("#wrapper");
    
    $$("head").innerHTML += `
        <style>
            #left li a {
                color: aliceblue;
                &:hover {
                    background-color: ${hoverBG};
                }
            }
            a.work_name,
            .work_name a {
                color: ${link};
            }
        </style>
    `;
})();
