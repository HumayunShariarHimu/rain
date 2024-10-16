/* Source: https://codepen.io/tommyho tommyho510@gmail.com */

/* Configurations */
delayRain = 50;
delayThunder = 2000;

/* Main Program */
const thunderstorm = document.getElementById("thunderstorm");
const lightning = document.getElementById('lightning');

// Function to create a random number within a given range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create raindrops
function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.className = "raindrop";
  thunderstorm.appendChild(raindrop);

  const startX = random(0, window.innerWidth);
  const startY = random(-10, -5);
  const duration = random(0.5, 2);

  gsap.fromTo(
    raindrop,
    { x: startX, y: startY, opacity: 1 },
    {
      x: startX + 20,
      y: window.innerHeight + 20,
      opacity: 0,
      duration,
      ease: "linear",
      onComplete: () => {
        thunderstorm.removeChild(raindrop);
      }
    }
  );
}

// Lightning Flash Animation
function createLightning() {
  gsap.to(lightning, {
    duration: 0.1,
    opacity: 1,
    delay: random(1, 10),
    onComplete: () => {
      gsap.to(lightning, {
        duration: 0.1,
        opacity: 0,
        delay: 0.1,
      });
    }
  });
}

// Periodically create raindrops & lightning
setInterval(() => {
  createRaindrop();
}, delayRain);

setInterval(() => {
  createLightning();
}, delayThunder);