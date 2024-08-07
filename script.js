document.getElementById('pickCardButton').addEventListener('click', function() {
    console.log("Pick a Card button clicked"); // Debugging line

    const allCards = [...truths, ...dares, ...mandatoryCards, { type: "Spank Wheel", content: "Spin the Spanking Wheel", instructions: "Spin the wheel to receive your fate." }];
    const pickedCard = allCards[Math.floor(Math.random() * allCards.length)];
    
    console.log("Picked Card:", pickedCard); // Debugging line

    // Display the selected card type and instructions
    document.getElementById('cardType').textContent = pickedCard.type;
    document.getElementById('instructions').textContent = pickedCard.content + " " + pickedCard.instructions;
    
    // Show or hide the spin button based on the card type
    if (pickedCard.type === "Spank Wheel") {
        document.getElementById('spinButton').classList.remove('hidden');
    } else {
        document.getElementById('spinButton').classList.add('hidden');
    }
    
    // Flip the card and show the result
    document.getElementById('card').classList.add('flip');
    setTimeout(() => {
        document.getElementById('card').classList.remove('hidden');
        document.getElementById('nextTurn').classList.remove('hidden');
    }, 600);
});

document.getElementById('nextTurn').addEventListener('click', function() {
    console.log("Next Turn clicked"); // Debugging line
    
    // Reset the card and move to the next player
    document.getElementById('card').classList.remove('flip');
    document.getElementById('card').classList.add('hidden');
    document.getElementById('nextTurn').classList.add('hidden');
    document.getElementById('instructions').textContent = '';
    
    // Move to the next player
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    document.getElementById('currentPlayer').textContent = `${players[currentPlayerIndex]}'s Turn`;
});
