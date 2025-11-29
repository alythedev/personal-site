// found this script on youtube and slightly modified it so it changes to a random colour and not a colour from a list of preselected ones :)
// https://www.youtube.com/watch?v=K5lpQKOBz0Q

const dvd = document.getElementById('dvd');
let x_incr = 3.5;
let y_incr = 3.5;
let animationId = null;

function init() {
}

// change the colour of the dvd logo
function handle_collision() {
    const dvd_height = dvd.offsetHeight;
    const dvd_width = dvd.offsetWidth;
    const dvd_top = dvd.offsetTop;
    const dvd_left = dvd.offsetLeft;
    const win_height = window.innerHeight;
    const win_width = window.innerWidth;

    if (dvd_left <= 0 || dvd_left + dvd_width >= win_width) {
        // reverse x_incr
        x_incr = -x_incr;
        dvd.style.fill = randomColor();
    }

    if (dvd_top <= 0 || dvd_top + dvd_height >= win_height) {
        // reverse y_incr
        y_incr = -y_incr;
        dvd.style.fill = randomColor();
    }
}

function animate() {
    handle_collision();
    dvd.style.top = `${dvd.offsetTop + y_incr}px`;
    dvd.style.left = `${dvd.offsetLeft + x_incr}px`;

    animationId = requestAnimationFrame(animate); // Changed: Store the ID
}

function randomColor() {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();

    return color;
}
console.log(randomColor());

// gemini helped me with this bit! 

function startDVD() {
    // Only start if not already running
    if (animationId) return;

    // Set initial properties (using fixed 50px, 50px start)
    dvd.style.display = 'block';
    dvd.style.fill = randomColor();
    dvd.style.position = 'fixed';
    dvd.style.top = '1px';   
    dvd.style.left = '1px';
    dvd.style.pointerEvents = 'none';
    animate();
}

function stopDVD() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    dvd.style.display = 'none';
}

window.startDVD = startDVD;
window.stopDVD = stopDVD;
window.dvd = dvd;

