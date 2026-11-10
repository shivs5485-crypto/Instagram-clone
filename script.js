
// ===== FOLLOW BUTTON =====

const followBtn = document.querySelector(".button button");

let isFollowing = false;

followBtn.addEventListener("click", function () {

    isFollowing = !isFollowing;

    if (isFollowing) {
        followBtn.innerText = "Following ✓";
        followBtn.style.background =
            "linear-gradient(45deg, #833ab4, #d62976)";

        createCelebration();

    } else {
        followBtn.innerText = "Follow";
        followBtn.style.background =
            "linear-gradient(45deg, #0095f6, #4f65e9)";
    }
});


// ===== CELEBRATION ANIMATION =====

function createCelebration() {

    const emojis = ["💖", "✨", "💜", "🌸", "❤️"];

    for (let i = 0; i < 20; i++) {

        const particle = document.createElement("span");

        particle.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        particle.style.position = "fixed";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = "-30px";
        particle.style.fontSize = "22px";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";

        document.body.appendChild(particle);

        const animation = particle.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 1800 + Math.random() * 1800,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        animation.onfinish = () => particle.remove();
    }
}


// ===== PROFILE IMAGE ANIMATION =====

const profileImage = document.querySelector(".main-img");

profileImage.addEventListener("click", function () {

    profileImage.animate(
        [
            { transform: "scale(1) rotate(0deg)" },
            { transform: "scale(1.2) rotate(10deg)" },
            { transform: "scale(1) rotate(0deg)" }
        ],
        {
            duration: 600,
            easing: "ease-in-out"
        }
    );
});


// ===== ANIMATED STATISTICS =====

const stats = document.querySelectorAll(
    ".post h4, .followers h4, .following h4"
);

stats.forEach(stat => {

    stat.addEventListener("mouseenter", function () {

        stat.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.2)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 350,
                easing: "ease-in-out"
            }
        );

    });

});


// ===== BIO CHARACTER INTERACTION =====

const bio = document.querySelector("#bio");

bio.addEventListener("input", function () {

    if (bio.value.length > 150) {
        bio.value = bio.value.substring(0, 150);
    }

});


// ===== HIGHLIGHT ANIMATION =====

const highlights = document.querySelectorAll(".sub-profile");

highlights.forEach((highlight, index) => {

    highlight.style.animation = `fadeUp 0.7s ease ${index * 0.15}s both`;

    highlight.addEventListener("click", function () {

        highlight.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.25)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 500,
                easing: "ease-in-out"
            }
        );

    });

});


// ===== WELCOME MESSAGE =====

window.addEventListener("load", function () {

    console.log("✨ Welcome to your Instagram Clone!");

});
