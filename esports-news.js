// esports_news.js

function showHomeTab() {
    hideAllTabs();
    document.getElementById("home_tab").style.display = "block";
}

function showArticlesTab() {
    hideAllTabs();
    document.getElementById("articles_tab").style.display = "block";
}

function showScoresTab() {
    hideAllTabs();
    document.getElementById("scores_tab").style.display = "block";
    fetchScores();
}

function fetchScores() {
    // Fetch live scores from RapidAPI
    // Update this function based on your RapidAPI integration
}

function showFullArticle(articleId) {
    window.location.href = `${articleId}.html`;
}

function hideAllTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
}

// Initial setup
window.onload = function() {
    showHomeTab();

    // Buttons
    const homeButton = document.getElementById("home_button");
    if (homeButton) {
        homeButton.addEventListener("click", showHomeTab);
    }
    
    const articlesButton = document.getElementById("articles_button");
    if (articlesButton) {
        articlesButton.addEventListener("click", showArticlesTab);
    }

    const scoresButton = document.getElementById("scores_button");
    if (scoresButton) {
        scoresButton.addEventListener("click", showScoresTab);
    }
};
