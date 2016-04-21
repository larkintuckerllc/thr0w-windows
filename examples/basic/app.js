(function() {
  'use strict';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var frameEl = document.getElementById('my_frame');
    // CONFIGURED FOR LOCAL DEVELOPMENT; CHANGE HOSTNAME AS REQUIRED
    thr0w.setBase('http://localhost');
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var grid = new thr0w.Grid(
        frameEl,
        document.getElementById('my_content'), [
          [0, 1, 2]
        ]);
      // ADDS WINDOW MANAGER FUNCTIONALITY TO GRID
      var myWM = new thr0w.windows.WindowManager('my_wm', grid);
      document.getElementById('one').addEventListener('click', openOne);
      document.getElementById('two').addEventListener('click', openTwo);
      function openOne() {
        // OPENS A WINDOW
        // SCROLL SYNCH ONLY WORKS IF SRC IS SAME DOMAIN
        myWM.openWindow('myWinOne', 0, 50, 200, 200, 'window.html');
      }
      function openTwo() {
        // OPENS ANOTHER WINDOW
        // SCROLL SYNC DOES NOT WORK
        myWM.openWindow('myWinTwo', 25, 75, 200, 200, 'http://www.cnn.com/');
      }
    }
    function messageCallback() {}
  }
})();
