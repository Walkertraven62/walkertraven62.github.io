// esports_news.js

const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://esportapi1.p.rapidapi.com/api/esport/search/ATK';

function showHomeTab() {
    document.getElementById("home_tab").style.display = "block";
    document.getElementById("articles_tab").style.display = "none";
    document.getElementById("scores_tab").style.display = "none";
}

function showArticlesTab() {
    document.getElementById("home_tab").style.display = "none";
    document.getElementById("articles_tab").style.display = "block";
    document.getElementById("scores_tab").style.display = "none";
}

function showScoresTab() {
    document.getElementById("home_tab").style.display = "none";
    document.getElementById("articles_tab").style.display = "none";
    document.getElementById("scores_tab").style.display = "block";
    // Fetch live scores from RapidAPI
    fetchScores();
}

function fetchScores() {
    fetch(apiUrl, {
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'esportapi1.p.rapidapi.com'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process the data and display it
        const scoresContainer = document.getElementById('scores-container');
        // Example: Displaying scores in a list
        const scoresList = document.createElement('ul');
        data.forEach(score => {
            const scoreItem = document.createElement('li');
            scoreItem.textContent = `${score.team1} vs ${score.team2}: ${score.score}`;
            scoresList.appendChild(scoreItem);
        });
        scoresContainer.appendChild(scoresList);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function showAddArticleWindow() {
    // Logic to show add article window
}

function saveArticleText(articleText) {
    // Logic to save article text
}

function loadSavedArticleText() {
    // Logic to load saved article text
}

// Initial setup
window.onload = function() {
    showHomeTab();

    // Buttons
    document.getElementById("home_button").addEventListener("click", showHomeTab);
    document.getElementById("articles_button").addEventListener("click", showArticlesTab);
    document.getElementById("scores_button").addEventListener("click", showScoresTab);

    // Load previously saved article text
    loadSavedArticleText();
};
