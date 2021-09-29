window.addEventListener("load", function () {
  let time = 0;
  setInterval(Count, 1000);

  function Count() {
    if (time == 2) {
      const Loader = document.querySelector(".Loader");
      Loader.className += " hidden";
    }
    time++;
  }
});
