const noBtn = document.getElementById('chase-btn');
const face = document.getElementById('face');
const begText = document.getElementById('beg-text');

const insults = [
    "ouch.", "come on...", "ril or peyk?", "u missed!", 
    "too slow!!", "try again lol", "not today!", "begging u"
];

// The Chase Logic
const moveButton = () => {
    const padding = 50;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Randomly change the text on the button and the note
    begText.innerText = insults[Math.floor(Math.random() * insults.length)];
    face.innerHTML = "😫";
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking while trying to "catch" it on mobile
    moveButton();
});

// Flow Logic
function stepOne() { 
    document.getElementById('modal1').style.display = 'flex'; 
}

function stepTwo() { 
    document.getElementById('modal1').style.display = 'none';
    document.getElementById('modal2').style.display = 'flex'; 
}

function hideAll() { 
    document.querySelectorAll('.overlay').forEach(o => o.style.display = 'none');
    begText.innerText = "wow.";
    face.innerHTML = "";
}

function finish() {
    document.querySelectorAll('.overlay').forEach(o => o.style.display = 'none');
    document.getElementById('main-note').style.display = 'none';
    document.getElementById('final-screen').style.display = 'block';
    document.body.style.background = '#ff0054';
    noBtn.style.display = 'none'; // End the chase
    setInterval(createHeart, 100);
}

function createHeart() {
    const h = document.createElement('div');
    h.className = 'heart';
    const icons = ['❤️','💖','✨','💋'];
    h.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.top = '100vh';
    h.style.fontSize = (Math.random() * 40 + 20) + 'px';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
}