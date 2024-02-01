let beerImg = document.querySelector('.beer-img img'),
    counter = 1,
    button = document.querySelector('.button-clicker'),
    beerAudio = document.querySelector('audio'),
    smug = document.querySelector('video');
    dance = document.querySelectorAll('.dance');
smug.style.cssText = 'display: none';
dance.forEach(el => {
    el.muted = true;
});
dance.forEach(el => {
    el.style.cssText = 'display: none';
});
refreshImg();
button.addEventListener('click', () => {
    counter++;
    button.innerHTML = `Click x${counter}`;
    refreshImg();
    refreshSound();
    refreshVideo();
})

function refreshImg () {
    if (counter < 25) {
        beerImg.src = 'assets/img/beer1.png'
    } else if (counter > 25 && counter < 50) {
        beerImg.src = 'assets/img/beer2.png'
    } else if (counter > 50) {
        beerImg.src = 'assets/img/beer3.png'
        button.innerHTML = 'Congratulations!'
        button.disabled = true;
    }
}

function refreshSound() {
    if (counter > 25 && counter < 27) {
        beerAudio.play();
    } else if (counter > 50) {
        beerAudio.play();
    }
}

function refreshVideo() {
    if (counter > 50) {
        setTimeout(() => {
            beerImg.style.cssText = 'display: none';
            smug.style.cssText = 'display: block';
            button.style.cssText = 'display: none';
            document.querySelector('.beer-img').style.cssText = 'display: none';
            document.querySelector('h1').innerHTML = 'СМУГЛЯНОЧКА! ТУЛА НА СВЯЗИ!'
            smug.play();
            dance.forEach(el => {
                el.play();
                el.style.cssText = 'display: block';
            });
            setTimeout(() => {
                alert('Все!');
                window.close();
            }, 138000)
        }, 3000);
    }
}