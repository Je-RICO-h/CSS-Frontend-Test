function startTime() {
    var clock= new Date();
    var h = clock.getHours();
    var m = clock.getMinutes();
    var s = clock.getSeconds();
    m = checkTime(m);
    s= checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
    function checkTime(i) {
        if(i<10) {
            i = "0" + i
        }
            return i;
        }
       
       function startDay() {
            var Time = new Date();
            var y = Time.getFullYear();
            var m = Time.getMonth();
            var d = Time.getDate();
            d = checkDay(d);
            m = checkDay(m);
            document.getElementById("dayz").innerHTML = y + "-" + m + "-" + d;
            var ti = setTimeout(startDay, 59000);
        }
        
        function checkDay(i) {
            if(i < 10) {i = "0" + i}
             return i;
        }

      function resolution(){
           var wid = window.innerWidth;
           var heig = window.innerHeight;
           if(wid > 1600){
               document.getElementById("time").style.fontSize = "2em";
               document.getElementById("time").style.left = "22%";
               document.getElementById("time").style.top = "32%";
               document.getElementById("dayz").style.fontSize = "2em";
               document.getElementById("dayz").style.left = "15%";
               document.getElementById("dayz").style.top = "32%";
               document.getElementsByTagName("img")[0].style.width = "140px";
               document.getElementsByTagName("img")[0].style.height = "50.5px";
               document.getElementById("navCloser").style.left = "9%"
               document.getElementsByTagName("ul")[0].style.fontSize = "2em";
           }
           if(wid < 1600){
               document.getElementById("time").style.fontSize = "1.5em";
               document.getElementById("time").style.left = "17%";
               document.getElementById("time").style.top = "32%";
               document.getElementById("dayz").style.fontSize = "1.5em";
               document.getElementById("dayz").style.left = "15%";
               document.getElementById("dayz").style.top = "35%";
               document.getElementsByTagName("img")[0].style.width = "120px";
               document.getElementsByTagName("img")[0].style.height = "49px";
               document.getElementById("navCloser").style.left = "110px"
               document.getElementsByTagName("ul")[0].style.fontSize = "1.5em";
           }
           if(wid < 1100){
               document.getElementById("time").style.fontSize = "1em";
               document.getElementById("time").style.left = "22%";
               document.getElementById("time").style.top = "40%";
               document.getElementById("dayz").style.fontSize = "1em";
               document.getElementById("dayz").style.left = "15%";
               document.getElementById("dayz").style.top = "38%";
           }
           
         var Check = setTimeout(resolution, 100);  
       } 
        
        function navOpen() {
         if(window.innerWidth > 1600){    
            document.getElementsByClassName("menu")[0].style.width = "12%";
         } else {
             document.getElementsByClassName("menu")[0].style.width = "160px";
         }
            document.getElementById("navCloser").style.display = "block";
        var x = document.getElementsByTagName("li").length;    
            for(var i=0; i<x; i++) {
                document.getElementsByTagName("li")[i].style.display = "list-item";
            }
        }
        
        function navClose() {
            document.getElementsByClassName("menu")[0].style.width = "0%";
            document.getElementById("navCloser").style.display = "none";
        var x = document.getElementsByTagName("li").length;
            for(var i=0; i<x; i++) {
                document.getElementsByTagName("li")[i].style.display = "none";
            }
        }

function pcormob() {    
if(window.innerWidth > 1000) {
  document.getElementsByTagName("img")[0].onmouseover = function() {imgopen();};
  document.getElementsByTagName("img")[0].onmouseout = function() {imgclose();};
  document.getElementById("time").onmouseover = function() {timeopen();};
  document.getElementById("dayz").onmouseout = function() {timeclose();};    
} else {
    document.getElementsByTagName("img")[0].onclick = function() {mobileimgopen();};
    document.getElementById("time").onclick = function() {mobiletimeopen();};
    document.getElementById("dayz").onclick = function() {mobiletimeopen();};
}
}
    function imgopen() {
        document.getElementsByTagName("img")[0].style.opacity = "0";
        document.getElementById("ptext").style.opacity = "1";
    }
    
    function imgclose() {
        document.getElementsByTagName("img")[0].style.opacity = "1";
        document.getElementById("ptext").style.opacity = "0";
    }
    
    function mobileimgopen() {
        if(document.getElementById("ptext").style.opacity == "1") {
            document.getElementById("ptext").style.opacity = "0";
            document.getElementsByTagName("img")[0].style.opacity = "1";
        } else {
            document.getElementById("ptext").style.opacity = "1";
            document.getElementsByTagName("img")[0].style.opacity = "0";
        }
    }
    
    function timeopen() {
        document.getElementById("time").style.display = "none";
        document.getElementById("dayz").style.display = "inline-block";
    }
    function timeclose() {
        document.getElementById("time").style.display = "inline-block";
        document.getElementById("dayz").style.display = "none";
    }
    
    function mobiletimeopen() {
        if(document.getElementById("dayz").style.display == "inline-block") {
            document.getElementById("dayz").style.display = "none";
            document.getElementById("time").style.display = "inline-block";
        } else {
            document.getElementById("time").style.display = "none";
            document.getElementById("dayz").style.display = "inline-block"
        }
    }
    
    