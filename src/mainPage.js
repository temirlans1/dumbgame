var xcol;
var ycol;
var zcol = 0;
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
  function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }
  
function findScreenCoords(mouseEvent)
{
    var xpos;
    var ypos;
    if (mouseEvent){
        //FireFox
        xpos = window.event.clientX;
        ypos = window.event.clientY;
    }
    else{
        //IE
        xpos = window.event.screenX;
        ypos = window.event.screenY;
    }
    var width = getWidth();
    var height = getHeight();
    width = parseInt(width/255);
    height = parseInt(height/255);
    xcol = parseInt(xpos/width);
    ycol = parseInt(ypos/height);
    document.getElementById("pos").innerHTML = "rgba("+xcol+","+ycol+","+zcol+")";
    document.getElementById("body").style.backgroundColor = "rgba("+xcol+","+ycol+","+zcol+")";
}
function copyRGB(){
    const el = document.createElement('textarea');
    var str = document.getElementById("pos");
    el.value = str.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied to the clipboard: " + str.innerHTML);
}

function zColor(event) {
    if(event.deltaY < 0){
        zcol = zcol + 1;
    }
    else if(event.deltaY > 0){
        if(zcol - 1 < 0){
            zcol = 255;
        }
        else zcol = zcol - 1;
    }
  zcol = zcol % 256;
  document.getElementById("pos").innerHTML = "rgba("+xcol+","+ycol+","+zcol+")";
  document.getElementById("body").style.backgroundColor = "rgba("+xcol+","+ycol+","+zcol+")";
}
document.getElementById("body").addEventListener("wheel", zColor);
document.getElementById("body").onmousemove = findScreenCoords;
document.getElementById("body").onclick = copyRGB;
