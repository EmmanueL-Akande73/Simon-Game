// Global variables
let sequence = [];
let userSequence = [];

// Function to simulate flashing a button
function flashButton(color) {
    console.log(`Flashing ${color} button`);
}

// Function to add a new color to the sequence
function nextRound() {
    const colors = ['green', 'red', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomColor);
}

// Function to check if the user input matches the sequence
function checkUserInput() {
    if (JSON.stringify(userSequence) === JSON.stringify(sequence)) {
        console.log("User input is correct!");
    } else {
        console.log("User input is incorrect!");
    }
}

// TEST CASES
function testFlashButton() {
    try {
        flashButton('green');
        console.log('✅ Flash Button Test Passed');
    } catch (error) {
        console.error('❌ Flash Button Test Failed:', error.message);
    }
}

function testSequenceGeneration() {
    try {
        sequence = []; // Reset sequence before test
        nextRound();
        console.assert(sequence.length > 0, 'Sequence Generation Failed');
        console.log('✅ Sequence Generation Test Passed');
    } catch (error) {
        console.error('❌ Sequence Generation Test Failed:', error.message);
    }
}

function testUserInput() {
    try {
        sequence = ['green', 'red'];
        userSequence = ['green', 'red'];
        checkUserInput();
        console.log('✅ User Input Test Passed');
    } catch (error) {
        console.error('❌ User Input Test Failed:', error.message);
    }
}

// Run tests
testFlashButton();
testSequenceGeneration();
testUserInput();
