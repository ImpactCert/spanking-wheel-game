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

// Additional game logic for picking cards and spinning the wheel would go here
