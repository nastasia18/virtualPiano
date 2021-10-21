let container = document.querySelector('.container');
let btn = container.querySelectorAll('kbd');

function validItems(item) {
    let result = false;
    for (let i = 0; i < btn.length; i++) {
        if(item.toLowerCase() === btn[i].textContent.toLowerCase()) {
            result = btn[i].textContent;
        }
    }
    return result;
}

let audioKey = false;

document.addEventListener('keydown', function (event) {
    let resultFunc = validItems(event.key);
    if(resultFunc === false) {
        console.log('error');
    } else {
        audioKey = new Audio(`./audio/${resultFunc}.mp3`);
        audioKey.play();
    }
})