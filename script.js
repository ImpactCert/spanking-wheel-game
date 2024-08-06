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

let wheelOutcomes = [
    "Receive 10 spanks with a paddle.",
    "Receive 15 spanks with a hand.",
    "Spin again and double the result.",
    "Choose an implement and receive 10 spanks."
];

document.getElementById('truthButton').addEventListener('click', function() {
    const result = truths[Math.floor(Math.random() * truths.length)];
    document.getElementById('result').textContent = result;
});

document.getElementById('dareButton').addEventListener('click', function() {
    const result = dares[Math.floor(Math.random() * dares.length)];
    document.getElementById('result').textContent = result;
});

document.getElementById('spinButton').addEventListener('click', function() {
    const result = wheelOutcomes[Math.floor(Math.random() * wheelOutcomes.length)];
    document.getElementById('result').textContent = result;
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

document.getElementById('addOutcome').addEventListener('click', function() {
    const newOutcome = document.getElementById('newOutcome').value;
    if (newOutcome) {
        wheelOutcomes.push(newOutcome);
        document.getElementById('newOutcome').value = '';  // Clear the input field
        alert('New spanking wheel outcome added!');
    }
});
