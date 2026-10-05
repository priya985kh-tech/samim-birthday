function openGift() {

    const gift = document.querySelector(".gift");

    // Stop floating animation
    gift.style.animation = "none";


    // Create sparkles
    for (let i = 0; i < 30; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✨";


        // Random starting position
        sparkle.style.left =
            (Math.random() * 160 + 15) + "px";

        sparkle.style.top =
            (Math.random() * 130 + 20) + "px";


        // Random movement
        const x =
            (Math.random() * 240 - 120) + "px";

        const y =
            (Math.random() * -180 - 40) + "px";


        sparkle.style.setProperty("--x", x);
        sparkle.style.setProperty("--y", y);


        // Random delay
        sparkle.style.animationDelay =
            (Math.random() * 0.3) + "s";


        gift.appendChild(sparkle);
    }


    // Go to Page 2 after sparkle
    setTimeout(function() {

        window.location.href = "page2.html";

    }, 1600);

}