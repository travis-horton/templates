//new tab--canvas from javascript console
let body = document.querySelector("body");
let canvas = document.createElement("canvas");
body.appendChild(canvas);
canvas.id = "canvas1"
canvas.width = 640;
canvas.height = 480;
canvas.style.border = "1px solid black";
let ctx = canvas.getContext("2d");
let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imageData.data;

//this is just messing with imagedata stuff...
function paintEverything(r,g,b,a) {
  for (i = 0; i < data.length; i += 4) {
    data[i] = r;
    data[i+1] = g;
    data[i+2] = b;
    data[i+3] = a;
  };
  ctx.putImageData(imageData,0,0)
};

function paint2DGrid() {
  paintEverything(0,0,0,255);
  var origin = ((c.width)*(c.height)/2);
  for (i = 0; i < data.length; i += 4) {
    var px = i/4;
    if (((px)+(c.width/2)) % c.width === 0) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
    if (Math.abs(px - origin-(c.width/2)) < c.width/2 ) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
  };
  ctx.putImageData(imageData,0,0)
};

function paintPointXY(x, y) {
  for (i = 0; i < data.length; i += 4) {
    var px = Math.floor(i/4)
    if (px % c.width === x &&
      px / c.height === y) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
  }
  ctx.putImageData(imageData,0,0)
};

function paintPointP(P) {
  for (i = 0; i < data.length; i += 4) {
    var px = Math.floor(i/4)
    if (px % c.width === (P.x) + (c.width/2) &&
      Math.floor(px/c.width) === (c.height-(P.y)) - (c.height/2)) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
  }
  ctx.putImageData(imageData,0,0)
};

//this doesn't work yet...
function paint3DGrid() {
  paintEverything(0,0,0,255);
  for (i = 0; i < data.length; i += 4) {
    var px = i/4;
    //x is up/down
    var x = px % (c.width) - (c.width/2);

    //y is upperleft/lowerright (left/right)
    var y = -(x + 3 * ((c.height/2) - Math.floor(px/c.width)));

    //z is lowerleft/upperright (in/out)
    var z = x - 2 * ((c.height/2) - Math.floor(px/c.width));

    //draws axes lines
    if (x === 0) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
    if (y === 0) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
    if (z === 0) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
  };
  ctx.putImageData(imageData,0,0)
};

function paint3Dpoint(pX, pY, pZ) {
  paint3DGrid();
  for (i = 0; i < data.length; i += 4) {
    var px = i/4;

    //x is up/down
    var x = -(Math.floor(px/c.width) - (c.height/2));

    //y is upperleft/lowerright (left/right)
    var y = -(x + 3 * (px % c.width - (c.width/2)));

    //z is lowerleft/upperright (in/out)
    var z = x - 2 * (px % c.width - (c.width/2));

    if (pX === x && pY === y && pZ === z) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    };
  };
}





function normalize(v) {
  var newV = {}
  newV.x = v.x/vLength(v);
  newV.y = v.y/vLength(v);
  newV.z = v.z/vLength(v);
  return newV
};
