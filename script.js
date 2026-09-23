/* ========================================
   OPENING
======================================== */

const opening = document.getElementById("opening");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    opening.classList.add("hide");

    createHeartBurst();

    startMusic();

});


/* ========================================
   MUSIC
======================================== */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;


function startMusic() {

    music.play()
        .then(() => {

            musicPlaying = true;
            musicBtn.textContent = "🔊";

        })
        .catch((error) => {

            console.log("Musik gagal dimainkan:", error);

        });

}


musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicBtn.textContent = "🎵";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;
                musicBtn.textContent = "🔊";

            })
            .catch((error) => {

                console.log("Musik gagal dimainkan:", error);

            });

    }

});

/* ========================================
   FLOATING HEARTS
======================================== */

const heartsContainer =
    document.getElementById("heartsContainer");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "♥",
        "♡",
        "❤",
        "💕",
        "💗",
        "💖"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 20 + 10) + "px";

    const duration =
        Math.random() * 8 + 7;

    heart.style.animationDuration =
        duration + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, (duration + 3) * 1000);

}


/* buat hati setiap beberapa detik */

setInterval(createHeart, 700);


/* ========================================
   HEART BURST
======================================== */

function createHeartBurst() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "♥";

        heart.style.left = "50%";

        heart.style.bottom = "50%";

        heart.style.fontSize =
            (Math.random() * 15 + 10) + "px";

        heart.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        heart.style.transform =
            `translateX(${Math.random() * 400 - 200}px)`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }

}




const startDate = new Date("2023-08-17");


function updateCounter() {

    const now = new Date();

    const difference =
        now.getTime() - startDate.getTime();

    if (difference < 0) {
        return;
    }

    const totalSeconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;


    document.getElementById("days").textContent =
        days.toLocaleString("id-ID");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCounter();

setInterval(updateCounter, 1000);


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop <
            windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ========================================
   LIGHTBOX
======================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");

const photoCards =
    document.querySelectorAll(".photo-card");


photoCards.forEach(card => {

    card.addEventListener("click", () => {

        const image =
            card.querySelector("img");

        lightboxImage.src =
            image.src;

        lightbox.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


function closeImage() {

    lightbox.classList.remove("active");

    document.body.style.overflow =
        "auto";

}


closeLightbox.addEventListener(
    "click",
    closeImage
);


lightbox.addEventListener(
    "click",
    event => {

        if (event.target === lightbox) {
            closeImage();
        }

    }
);


/* ========================================
   ESC KEY
======================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeImage();
        }

    }
);


/* ========================================
   CURSOR SPARKLE
======================================== */

document.addEventListener(
    "mousemove",
    event => {

        if (Math.random() > 0.8) {

            const sparkle =
                document.createElement("div");

            sparkle.innerHTML = "✦";

            sparkle.style.position =
                "fixed";

            sparkle.style.left =
                event.clientX + "px";

            sparkle.style.top =
                event.clientY + "px";

            sparkle.style.pointerEvents =
                "none";

            sparkle.style.zIndex =
                "99999";

            sparkle.style.color =
                "#ff6f9c";

            sparkle.style.fontSize =
                "10px";

            sparkle.style.transition =
                "all .8s ease";

            document.body.appendChild(
                sparkle
            );

            requestAnimationFrame(() => {

                sparkle.style.transform =
                    "translateY(-20px) scale(0)";

                sparkle.style.opacity = "0";

            });

            setTimeout(() => {

                sparkle.remove();

            }, 800);

        }

    }
);


/* ========================================
   IMAGE ERROR HANDLING
======================================== */

document.querySelectorAll(".photo-card img")
.forEach(img => {

    img.addEventListener("error", () => {

        img.style.background =
            "linear-gradient(135deg,#ffc1d5,#ff6f9c)";

        img.style.objectFit =
            "contain";

        img.alt =
            "Masukkan foto di folder images";

    });

});