// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    });
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', () => {
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
