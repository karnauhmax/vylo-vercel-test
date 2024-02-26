
var progressBar = document.querySelector("#progress-bar");
var content = document.querySelector("#main-rap");
var bounds = content.getBoundingClientRect();

var scroller = {
  wheelMultiplier: getLineHeight(),
  ease: 0.03,
  speed: 0,
  minY: 0,
  maxY: bounds.height - window.innerHeight,
  y: 0
};

window.scrollTo(0, 0);
createShapes(50);

window.addEventListener("wheel", onWheel);
onFrame();

function onFrame() {

  scroller.speed += -scroller.speed * scroller.ease;
  // scroller.y -= scroller.speed;
  scroller.y -= Math.round(scroller.speed * 1000) / 1000;

  if (scroller.y < scroller.minY) {
    scroller.y = scroller.minY;
    scroller.speed = 0;
  } else if (scroller.y > scroller.maxY) {
    scroller.y = scroller.maxY;
    scroller.speed = 0;
  }

  var progress = scroller.y / scroller.maxY;

  content.style.transform = "translate3d(0px," + -scroller.y + "px, 1px)";
  progressBar.style.transform = "translate3d(0px,0px,0px) scaleY(" + progress + ")";

  requestAnimationFrame(onFrame);
}

function onWheel(event) {
  event.preventDefault();

  var normalized;  
  var delta = event.wheelDelta;

  if (delta) {
    normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
  } else {
    delta = event.deltaY || event.detail || 0;
    normalized = -(delta % 3 ? delta * 10 : delta / 3);
  }

  scroller.speed += normalized * scroller.wheelMultiplier;
}

function getLineHeight() {

  var element = document.createElement("div");
  element.style["font-size"] = "128ex";
  document.body.appendChild(element);
  var value = getComputedStyle(element).getPropertyValue("font-size");
  var size = parseFloat(value, 10) / 128;
  document.body.removeChild(element);
  return size;
}

function createShapes(numShapes) {

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < numShapes; i++) {

    var shape = document.createElement("div");
    fragment.appendChild(shape);

    TweenLite.set(shape, {
      backgroundColor: Math.random() * 0xffffff,
      top: 0,
      left: 0,
      height: random(100, 300),
      width: random(100, 300),
      opacity: random(0.5, 0.75),
      position: "absolute",
      pointerEvents: "none",
      rotation: random(360),
      x: random(bounds.width - 150),
      y: random(bounds.height - 150),
    });
  }

  content.appendChild(fragment);
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}