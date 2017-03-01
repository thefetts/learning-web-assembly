function run() {
  var mathModule = new MathModule();
  var cubed = mathModule.cube(document.querySelector('#cube').value);
  document.querySelector('#result').innerText = cubed;
}
