'use strict';
let scale;

// function FindFitScale(height, width) {
//   var size = (height / $("#div_main").height());

//   function find_(size, width) {
//     if ($("#div_main").width() * size > width) {
//       size -= 0.05;
//       find_(size, width);
//     } else {
//       scale = size;
//       window.parent_scale = size;
//     }
//   }
//   find_(size, width);

// }

// window.onorientationchange = function() {
//   var orientation = window.orientation;
//   console.log("-----------");
//   FindFitScale($(window).height(), $(window).width());
//   $("#div_main").css("left", '50%');
//   $("#div_main").css("transform-origin", '0 0');
//   $("#div_main").css("transform", 'scale(' + window.parent_scale + ') translateX(-50%)');
//   window.parent_top = $('#div_main').get(0).getBoundingClientRect().top;
//   window.parent_left = $('#div_main').get(0).getBoundingClientRect().left;
// }
// window.onresize = function() {
//   FindFitScale($(window).height(), $(window).width());

//   $("#div_main").css("left", '50%');
//   $("#div_main").css("transform-origin", '0 0');
//   $("#div_main").css("transform", 'scale(' + window.parent_scale + ') translateX(-50%)');
//   window.parent_top = $('#div_main').get(0).getBoundingClientRect().top;
//   window.parent_left = $('#div_main').get(0).getBoundingClientRect().left;
// }

// $(document).ready(function() {
//   FindFitScale($(window).height(), $(window).width());
//   $("#div_main").css("left", '50%');
//   $("#div_main").css("transform-origin", '0 0');
//   $("#div_main").css("transform", 'scale(' + window.parent_scale + ') translateX(-50%)');
//   window.parent_top = $('#div_main').get(0).getBoundingClientRect().top;
//   window.parent_left = $('#div_main').get(0).getBoundingClientRect().left;
// });