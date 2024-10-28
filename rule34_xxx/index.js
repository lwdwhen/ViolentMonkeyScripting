// ==UserScript==
// @name        New script rule34.xxx
// @description 10/27/2024, 4:07:02 PM
// @match       *://rule34.xxx/*
// @resource    rule.css https://github.com/lwdwhen/ViolentMonkeyScripting/raw/refs/heads/main/rule.css
// @grant       GM.getResourceText
// @grant       GM.addStyle
// @version     1.1
// ==/UserScript==

GM.addStyle(GM.getResourceText("rule.css"))

const logFunc = () => console.log('doc.body', body)

document.addEventListener('DOMContentLoaded', logFunc, false);
console.log('doc.bodyy', GM.getResourceText("rule.css"))

//alert('123')
