// Create and append loading screen
const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';
loadingScreen.innerHTML = '<div class="loader"></div>';
document.body.appendChild(loadingScreen);

// Function to remove loading screen
function removeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        },
