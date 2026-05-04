// explore.js

window.addEventListener('DOMContentLoaded', init);

let voiceListUpdated = false;

function updateVoiceList() {
    if(voiceListUpdated) return;
    let voiceSelect = document.querySelector('#explore > select');
    if(voiceSelect) voiceListUpdated = true;
    else return;
    let voices = speechSynthesis.getVoices();
    for (let i in voices) {
        let voiceOption = document.createElement('option');
        voiceOption.textContent = voices[i].name;
        voiceOption.value = i;
        voiceSelect.appendChild(voiceOption);
    }
}

document.body.addEventListener('click', () => { // nuclear option
    if (!voiceListUpdated) updateVoiceList();
});

function init() {
    let voiceSelect = document.querySelector('#explore > select');
    let voiceButton = document.querySelector('#explore > button');
    voiceSelect.addEventListener('click', updateVoiceList);
    let loadingOption = document.createElement('option');
    let exploreImage = document.querySelector('#explore > img');
    updateVoiceList();
    voiceButton.addEventListener('click', () => {
        let spokenText = document.querySelector('#explore > textarea').value;
        let utterance = new SpeechSynthesisUtterance(spokenText);
        let voices = speechSynthesis.getVoices();
        utterance.voice = voices[voiceSelect.value];
        speechSynthesis.speak(utterance);
        exploreImage.src = 'assets/images/smiling-open.png';
        utterance.addEventListener('end', () => {
            exploreImage.src = 'assets/images/smiling.png';
        });
    });
}