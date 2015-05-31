/**
 * Created by CJWZY on 2015/5/24.
 */
function init(){
    document.getElementById("dj").play();
    changeImg(1,"5.gif");
    var img1 = document.getElementById("img1");
    img1.style.left = (window.innerWidth-img1.width)/2+"px";
    print(img1.style.left);
    img1.style.top = (window.innerHeight-img1.height)/2+"px";
    print(img1.style.top);
    requestAnimationFrame(function(){
        rander();
        lastTime = Date.now();
        requestAnimationFrame(arguments.callee);
    });
}

function drawImg(url){
    canvas.src = window.resources.get(url).src;
}

function changeImg(i,src){
    if(src.length!=0){
        document.getElementById("img"+i).src = (window.resources.get(src).src);
    }else{
        document.getElementById("img"+i).src = "";
        document.getElementById("img"+i).style.display = "none";
    }
}