// esports_news.js

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
