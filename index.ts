import $ from 'jquery';
declare const M: any;

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  M.Parallax.init(elems, {});
});

// Find the right method, call on correct element
function launchFullScreen(element: any) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

// Launch fullscreen for browsers that support it!
addEventListener("touchmove", () => {
  launchFullScreen(document.documentElement); // the whole pagedocument.documentElement
});
