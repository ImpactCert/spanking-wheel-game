let truths = [
    { type: "Truth", content: "Have you been diapered?", instructions: "Answer the question truthfully or drink." },
    { type: "Truth", content: "What's your most embarrassing spanking?", instructions: "Answer the question truthfully or drink." },
    { type: "Truth", content: "The weirdest place you've played with yourself.", instructions: "Answer the question truthfully or drink." },
    { type: "Truth", content: "The weirdest thing you have fantasized about.", instructions: "Answer the question truthfully or drink." },
    { type: "Truth", content: "What is something new you would like to try in the bedroom?", instructions: "Answer the question truthfully or drink." },
    { type: "Truth", content: "What is your ultimate turn-on when it comes to dirty talk?", instructions: "Answer the question truthfully or drink." }
];

let dares = [
    { type: "Dare", content: "Stand in the corner with your pants down for two turns.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Spank the person next to you 10 times with the implement of your choosing.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Get spanked 5 times with the paddle by all other players.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Give 10 spanks each to the other players, pants down, and send them to the corner for two rounds.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Get spanked 15 times with the paddle and hand (total of 30) by all other players.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Masturbate in front of everyone for 1 minute; if not, receive a full discipline spanking from other players (10 minutes—5 mins of hand, 5 mins of implements).", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Bend over and receive 10 spanks from a person of your choice.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Wear the ball gag for two rounds.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Pull your pants down and hold your ankles in the corner until your next turn.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Give a lap dance to a person of your choice for a full song.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Insert a butt plug and wear it for the next 15 minutes.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Allow someone to tie your hands with a rope or scarf for the next round.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Wear nipple clamps for the next 10 minutes.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Blindfold a person of your choice and give them a sensual touch experience.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Role-play a dominant and submissive scene for the next 5 minutes.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Perform a seductive strip tease.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Lick someone's neck for 10 seconds.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Whisper a dirty fantasy into someone’s ear.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Perform a sexy dance for the group.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Use a soft item (like a feather or scarf) to tease someone’s skin for 2 minutes.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Sit on someone's lap for the next two rounds.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Do a fake orgasm for 20 seconds.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Massage the person to your right's butt.", instructions: "Perform the dare or drink." },
    { type: "Dare", content: "Play with the person to the left of you until your next turn.", instructions: "Perform the dare or drink." }
];

let mandatoryCards = [
    { type: "Mandatory", content: "Masturbate in front of everyone for 1 minute; if not, receive a full discipline spanking.", instructions: "This is a mandatory card. Perform it or drink." }
];

let wheelOutcomes = [
    "Receive 10 spanks with a paddle.",
    "Receive 15 spanks with a hand.",
    "Spin again and double the result.",
    "Choose an implement and receive 10 spanks.",
    "Receive 20 spanks with a combination of implements.",
    "Choose someone to give you the spanking."
];

let players = [];
let currentPlayerIndex = 0;

function addPlayer() {
    const playerNameInput = document.getElementById('playerName');
    const playerName = playerNameInput.value.trim();
    
    if (playerName) {
        players.push(playerName);
        const playerListItem = document.createElement('li');
        playerListItem.textContent = playerName;
        document.getElementById('playerList').appendChild(playerListItem);
        playerNameInput.value = '';  // Clear the input field
        playerNameInput.focus();  // Set focus back to the input field for easier multiple entries
    }
}

document.getElementById('addPlayer').addEventListener('click', addPlayer);

document.getElementById('playerName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addPlayer();
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

document.getElementById('pickCardButton').addEventListener('click', function() {
    const allCards = [...truths, ...dares, ...mandatoryCards, { type: "Spank Wheel", content: "Spin the Spanking Wheel", instructions: "Spin the wheel to receive your fate." }];
    const pickedCard = allCards[Math.floor(Math.random() * allCards.length)];
    
    document.getElementById('cardType').textContent = pickedCard.type;
    document.getElementById('instructions').textContent = pickedCard.content + " " + pickedCard.instructions; // Display content and instructions
    
    if (pickedCard.type === "Spank Wheel") {
        document.getElementById('spinButton').classList.remove('hidden');
    } else {
        document.getElementById('spinButton').classList.add('hidden');
    }
    
    document.getElementById('card').classList.add('flip');
    setTimeout(() => {
        document.getElementById('card').classList.remove('hidden');
        document.getElementById('nextTurn').classList.remove('hidden');
    }, 600);
});

document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    wheel.classList.add('spin-animation');

    setTimeout(function() {
        wheel.classList.remove('spin-animation');
        const result = wheelOutcomes[Math.floor(Math.random() * wheelOutcomes.length)];
        document.getElementById('instructions').textContent = result;
    }, 3000);
});

document.getElementById('nextTurn').addEventListener('click', function() {
    document.getElementById('card').classList.remove('flip');
    document.getElementById('card').classList.add('hidden');
    document.getElementById('nextTurn').classList.add('hidden');
   
