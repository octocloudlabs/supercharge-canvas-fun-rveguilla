let c = new Candy('#c', 400, 400);

window.onload = function () {
  let index = 0;


  let display = new Display();

  // display.add(1);
  // display.add(2);
  // display.add(3);

  c.noStroke();
  function animate() {
    c.clear(25);

    // sevenSegments(nums[index]);
    index = (index + 1) % display.hex.length;


    display.render(display.hex[index]);

    // c.loop(animate);
  }
  window.setInterval(animate, 1000);
  animate();
}