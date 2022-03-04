/*
 * @Author: zzybluebell
 * @Date:   2021-12-31 
 * @Last Modified by:   zzybluebell
 * @Last Modified time: 2022-02-28 
 */

'use strict';
var Load_animation = document.getElementById('Load-animation'),
    Load_animation_span = document.getElementById('Load-animation-span'),
    Load_body = document.getElementsByTagName('body')[0],
    get_into;

function LoadtTime() {
    Load_animation_span.innerHTML = 'Loading...';
    get_into = 'OK';
    Load();
}

function Load() {
    if (get_into == 'OK') {
        Load_animation.style.animationName = 'getInto';
        get_into = 'NO';
    } else {
        console.log('未加载完成');
    }
}
document.onreadystatechange = function() {
    if (document.readyState == 'complete') {
        LoadtTime()
        console.log('加载完成')
    }
}
Load_animation.onclick = function() {
    Load_animation.style.animationName = 'getInto';
    get_into = 'NO';
}