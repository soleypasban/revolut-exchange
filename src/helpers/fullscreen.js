export const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

export const fullScreenIfSupported = () => {
    const showFullScreen = () => (typeof window.orientation !== 'undefined') && openFullscreen()
    document.addEventListener('DOMContentLoaded', showFullScreen, false);
}
