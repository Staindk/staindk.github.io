// take list input and return 1 random result
var myList = document.querySelector('#my-list');
for (var i = myList.children.length; i > 1; i--) {
  myList.removeChild(myList.children[Math.random() * i | 0]);
}

// delay page display until page is done rendering (so that e.g. the full
// list of fun_titles doesn't show for a split second before the above function runs on them)
var DOMReady = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback());
};
DOMReady(function() {
  const cover_div = document.querySelector('#cover');
  cover_div.style.opacity = '0';
  // the below - remove div if div opacity has transitioned OR after 750ms 
  // (this helps when e.g. opening website in a second tab, which seems to not 
  // add the event listener properly(?))
  cover_div.addEventListener('transitionend', () => cover_div.remove());
  setTimeout(() => {
    cover_div.remove();
  }, 750);
});