const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate',()=>{
    player.getCurrentTime().then((seconds) => {
        localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch((error) => {
        // an error occurred
        console.log(error);
    });
})