document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('votingForm');
    const option1Votes = document.getElementById('option1Votes');
    const option2Votes = document.getElementById('option2Votes');
    const option3Votes = document.getElementById('option3Votes');

    let votes = {
        Option1: 0,
        Option2: 0,
        Option3: 0
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const selectedOption = form.elements['vote'].value;
        if (selectedOption) {
            votes[selectedOption]++;
            updateResults();
        }
    });

    function updateResults() {
        option1Votes.textContent = votes.Option1;
        option2Votes.textContent = votes.Option2;
        option3Votes.textContent = votes.Option3;
    }
});
