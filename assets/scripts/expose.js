// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {   
    let hornSelect = document.querySelector('#horn-select');
    const jsConfetti = new JSConfetti();
    hornSelect.addEventListener('change', () => {
        let hornImage = document.querySelector('#expose > img');
        let hornSound = document.querySelector('#expose > audio');
        if (hornSelect.value === 'air-horn') {
            hornImage.src = 'assets/images/air-horn.svg';
            hornSound.src = 'assets/audio/air-horn.mp3';
        } else if (hornSelect.value === 'car-horn') {
            hornImage.src = 'assets/images/car-horn.svg';
            hornSound.src = 'assets/audio/car-horn.mp3';
        } else if (hornSelect.value === 'party-horn') {
            hornImage.src = 'assets/images/party-horn.svg';
            hornSound.src = 'assets/audio/party-horn.mp3';
        }
    });
    let volumeSlider = document.querySelector('#volume');
    volumeSlider.addEventListener('input', () => {
        let volumeIcon = document.querySelector('#volume + img');
        let hornSound = document.querySelector('#expose > audio');
        hornSound.volume = volumeSlider.value / 100;
        if (volumeSlider.value == 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (1 <= volumeSlider.value && volumeSlider.value < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (33 <= volumeSlider.value && volumeSlider.value < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else if (67 <= volumeSlider.value) {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }
    });
    let playButton = document.querySelector('#expose > button');
    playButton.addEventListener('click', () => {
        let hornSound = document.querySelector('#expose > audio');
        hornSound.play();
        let hornSelect = document.querySelector('#horn-select');
        if (hornSelect.value === 'party-horn') {
            jsConfetti.addConfetti();
        }
    }); 
}   