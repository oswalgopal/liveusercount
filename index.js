const url = "https://live-user-count.herokuapp.com";
// const socket = io('http://localhost:9090/', {transports: ['websocket']});
const socket = io(url, {transports: ['websocket']});

const liveCount = document.createElement('div');
liveCount.style.position = 'absolute';
liveCount.style.top = 0;
liveCount.style.left = 0;
liveCount.style.width = '100px';
liveCount.style.height = '50px';
liveCount.style.background = 'red';
document.body.appendChild(liveCount);
function getLiveCount(config){
    // socket.on
    const url = window.location.href;
    socket.emit('join', {url});
}
socket.on('new_user', (data) => {
    console.log(data);
    liveCount.innerHTML = "Live user: " + data.count;
});
module.exports = getLiveCount;