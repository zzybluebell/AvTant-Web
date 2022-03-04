/*
* @Author: 一腔孤勇
* @Date:   2020-11-30 21:33:30
* @Last Modified by:   一腔孤勇
* @Last Modified time: 2021-03-22 13:34:20
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
function Load(){
  if (get_into == 'OK') {
      Load_animation.style.animationName = 'getInto';
      get_into = 'NO';
  }else{
      console.log('未加载完成');
  } 
}
document.onreadystatechange = function () {
   if (document.readyState == 'complete') {
      LoadtTime()        
      console.log('加载完成')
   }
}
Load_animation.onclick = function () {
      Load_animation.style.animationName = 'getInto';
      get_into = 'NO';
}
