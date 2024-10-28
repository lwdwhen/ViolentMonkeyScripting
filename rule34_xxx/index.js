// ==UserScript==
// @name        New script rule34.xxx
// @description 10/27/2024, 4:07:02 PM
// @match       *://rule34.xxx/*
// @resource    rule.css https://raw.githubusercontent.com/lwdwhen/ViolentMonkeyScripting/a733c3fc5e9d70834089b38efc933157fa08a7ce/rule.css
// @grant       GM.getResourceText
// @grant       GM.addStyle
// ==/UserScript==

GM.addStyle(GM.getResourceText("rule.css"))

const logFunc = () => console.log('doc.body', body)

document.addEventListener('DOMContentLoaded', logFunc, false);
console.log('doc.bodyy', GM.getResourceText("rule.css"))

//alert('123')
