const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!"),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"))})),t.getVideoTitle().then((function(e){console.log("title:",e)})),t.on("timeupdate",(()=>{t.getCurrentTime().then((e=>{localStorage.setItem("videoplayer-current-time",e)})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=02-video.0da8dc4a.js.map
