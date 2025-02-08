function removeAds() {
    // Remove video ads
    let adContainers = document.querySelectorAll('.video-ads, .ytp-ad-module, .ytp-ad-player-overlay, .ad-showing, .ad-interrupting');
    adContainers.forEach(ad => {
        ad.remove();
    });

    // Skip skippable ads
    let skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
    if (skipButton) {
        skipButton.click();
    }

    // Remove sidebar and homepage ads
    let sideAds = document.querySelectorAll('ytd-ad-slot-renderer, ytd-display-ad-renderer, ytd-promoted-video-renderer, #player-ads');
    sideAds.forEach(ad => ad.remove());

    console.log("YouTube ads removed");
}

// Run the function every second to catch new ads
setInterval(removeAds, 1000);
