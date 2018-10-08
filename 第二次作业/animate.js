function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

function animate(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var isStop=true;
        for(var attr in json){
            //var now=parseInt(getStyle(obj,attr));
            var now=0;
            if(attr=='opacity'){
                now=parseInt(getStyle(obj,attr)*100);
            }else{
                now=parseInt(getStyle(obj,attr));
            }
            // var speed=Math.ceil((500-now)/6);
            var speed=(json[attr]-now)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            var current=now+speed;
            if(attr=='opacity'){
                obj.style[attr]=current/100;
            }else{
                obj.style[attr]=current+"px";
            }
            // obj.style[attr]=current+"px";
            if(json[attr]!==current){
                isStop=false;
            }
            // if(now==json[attr]){
            //     clearInterval(timer);
            // }else{
            //     obj.style.left=now+speed+"px";
            // }
        }

        if(isStop){
            clearInterval(timer);
            callback&&callback();
        }
    },30)

}