let truths = [
    "Have you been diapered?",
    "What's your most embarrassing spanking?",
    "The weirdest place you've played with yourself.",
    "The weirdest thing you have fantasized about."
];

let dares = [
    "Stand in the corner with your pants down for two turns.",
    "Spank the person next to you 10 times with the implement of your choosing.",
    "Get spanked 5 times with the paddle by all other players.",
    "Pull your pants down and hold your ankles in the corner until your next turn."
];

let mandatoryCards = [
    "Masturbate in front of everyone for 1 minute; if not, receive a full discipline spanking from other players. 10 minutes—5 mins of hand, 5 mins of implements.",
    "Get spanked 15 times with the paddle and hand (total of 30) by all other players.",
    "Give 10 spanks each to the other players, pants down, and send them to the corner for two rounds."
];

let wheelOutcomes = [
    "Receive 10 spanks with a paddle.",
    "Receive 15 spanks with a hand.",
    "Spin again and double the result.",
    "Choose an implement and receive 10 spanks."
];

let players = [];
let currentPlayerIndex = 0;

document.getElementById('addPlayer').addEventListener('click', function() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        players.push(playerName);
        const playerListItem = document.createElement('li');
        playerListItem.textContent = playerName;
        document.getElementById('playerList').appendChild(playerListItem);
        document.getElementById('playerName').value = '';
    }
});

document.getElementById('startGame').addEventListener('click', function() {
    if (players.length > 0) {
        document.querySelector('.player-setup').classList.add('hidden');
        document.getElementById('gameArea').classList.remove('hidden');
        document.getElementById('currentPlayer').textContent = `${players[currentPlayerIndex]}'s Turn`;
    } else {
        alert('Please add at least one player!');
    }
});

document.getElementById('truthButton').addEventListener('click', function() {
    const result = truths[Math.floor(Math.random() * truths.length)];
    document.getElementById('result').textContent = result;
});

document.getElementById('dareButton').addEventListener('click', function() {
    const result = dares[Math.floor(Math.random() * dares.length)];
    document.getElementById('result').textContent = result;
});

document.getElementById('mandatoryButton').addEventListener('click', function() {
    const result = mandatoryCards[Math.floor(Math.random() * mandatoryCards.length)];
    document.getElementById('result').textContent = result;
});

document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    
    // Start the spinning animation
    wheel.classList.add('spin-animation');

    // Choose a random outcome after the animation ends
    setTimeout(function() {
        wheel.classList.remove('spin-animation');
        const result = wheelOutcomes[Math.floor(Math.random() * wheelOutcomes.length)];
        document.getElementById('result').textContent = result;
    }, 3000);  // Match this duration with the animation duration in CSS
});

document.getElementById('nextTurn').addEventListener('click', function() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    document.getElementById('currentPlayer').textContent = `${players[currentPlayerIndex]}'s Turn`;
    document.getElementById('result').textContent = '';
});

document.getElementById('addTruth').addEventListener('click', function() {
    const newTruth = document.getElementById('newTruth').value;
    if (newTruth) {
        truths.push(newTruth);
        document.getElementById('newTruth').value = '';  // Clear the input field
        alert('New truth added!');
    }
});

document.getElementById('addDare').addEventListener('click', function() {
    const newDare = document.getElementById('newDare').value;
    if (newDare) {
        dares.push(newDare);
        document.getElementById('newDare').value = '';  // Clear the input field
        alert('New dare added!');
    }
});

document.getElementById('add
