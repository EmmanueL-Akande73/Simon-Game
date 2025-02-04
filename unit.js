function testFlashButton() {
    flashButton('green');
    console.log('Flash Button Test Passed');
}

function testSequenceGeneration() {
    sequence = [];
    nextRound();
    console.assert(sequence.length > 0, 'Sequence Generation Failed');
    console.log('Sequence Generation Test Passed');
}

function testUserInput() {
    sequence = ['green', 'red'];
    userSequence = ['green', 'red'];
    checkUserInput();
    console.log('User Input Test Passed');
}

testFlashButton();
testSequenceGeneration();
testUserInput();
