const url = "https://live-user-count.herokuapp.com";
// const socket = io('http://localhost:9090/', {transports: ['websocket']});
const socket = io(url, {transports: ['websocket']});

const liveCount = document.createElement('div');
liveCount.classList.add("live-count-class");
liveCount.style.position = 'absolute';
liveCount.style.top = 0;
liveCount.style.left = 0;
liveCount.style.padding = '10px 50px';
liveCount.style.background = 'black';
liveCount.style.color = 'white';
liveCount.style.fontWeight = 600;
document.body.appendChild(liveCount);

let text = "Live user: ";
function getLiveCount(config){
    // console.log(config);
    text = config.text;
    liveCount.style.background  = config.backgroundColor;
    liveCount.style.position = config.position;
    liveCount.style.top = config.top;
    liveCount.style.left = config.left;
    liveCount.style.color = config.textColor;
    const url = window.location.href;
    socket.emit('join', {url});
}
socket.on('new_user', (data) => {
    // console.log(data);
    liveCount.innerHTML = text + " " + data.count;
});
module.exports = getLiveCount;