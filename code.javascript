// Function to simulate loading live scores
function fetchLiveScores() {
    document.getElementById('live-scores').innerText = "Fetching live scores...";
    
    // Simulating fetching live scores with a timeout
    setTimeout(() => {
        document.getElementById('live-scores').innerText = "Scores: Team A 2 - Team B 1"; // Example score
    }, 2000); // Waits 2 seconds before showing scores
}

// Call the function to load scores on page load
fetchLiveScores();
