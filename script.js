var main = document.body;
var cursor = document.getElementById("cursor");

main.addEventListener('mousemove', (move) => {
    const { clientX, clientY } = move;

    gsap.to(cursor, {
        x: clientX,
        y: clientY, 
        duration: 1,
        ease: "back.out(1.7)"
    });
});

function createHoverEffect(elementClass, imageClass) {
    const hoverElements = document.getElementsByClassName(elementClass);
    const hoverImages = document.getElementsByClassName(imageClass);

    Array.from(hoverElements).forEach((element, index) => {
        const image = hoverImages[index];
        
        // Check if elements exist
        if (!element || !image) {
            console.warn(`Missing elements for ${elementClass}`);
            return;
        }

        element.addEventListener('mousemove', (e) => {
            // Set display before animation to ensure visibility
            image.style.display = 'block';
            
            gsap.to(image, {
                opacity: 1,
                duration: 1,
                position: "fixed",
                top: e.clientY,
                left: e.clientX,
                xPercent: -50,
                yPercent: -50,
                ease: "expo.out"
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(image, {
                opacity: 0,
                duration: 0.5, // Reduced duration for better response
                ease: "expo.out",
                onComplete: () => {
                    image.style.display = 'none';
                }
            });
        });
    });
}

// Replace all hover functions with single function calls
createHoverEffect('serve1', 'hovImg');
createHoverEffect('serve2', 'hovImg2');
createHoverEffect('serve3', 'hovImg3');
createHoverEffect('serve4', 'hovImg4');

gsap.to(".navbar", {
    scrollTrigger: {
        trigger: ".navbar",
        start: "top 1%",
        end: "bottom -100000%",
        toggleActions: "none none none none",
        toggleClass: { targets: ".navbar", className: "scrolled" },
    }

});



gsap.to(".fly span:nth-child(1)", {
    x: -900,
    y: -700,
    rotate: -190,
    scrollTrigger: {
        trigger: ".fly span:nth-child(1)",
        start: "top 95%",
        end: "top 0%",
        toggleActions: "play none none reverse",
        scrub: 0.2,
    }
});
gsap.to(".fly span:nth-child(2)", {

    x: 300,
    y: -900,
    rotate: -300,
    scrollTrigger: {
        trigger: ".fly span:nth-child(2)",
        start: "top 90%",
        end: "top 0%",
        toggleActions: "play none none reverse",
        scrub: 0.2,
    }
});
gsap.to(".fly span:nth-child(3)", {
    x: -1200,
    y: -5,
    rotate: -160,
    scrollTrigger: {
        trigger: ".fly span:nth-child(3)",
        start: "top 90%",
        end: "top 0%",
        toggleActions: "play none none reverse",
        scrub: 0.2,
    }
});
gsap.to(".fly span:nth-child(4)", {
    x: -400,
    y: -1000,

    rotate: 150,
    scrollTrigger: {
        trigger: ".fly span:nth-child(4)",
        start: "top 85%",
        end: "top 0%",
        toggleActions: "play none none reverse",
        scrub: 0.2,
    }
});
gsap.to(".fly span:nth-child(5)", {
    x: 900,
    y: -6,
    rotate: 245,
    scrollTrigger: {
        trigger: ".fly span:nth-child(5)",
        start: "top 95%",
        end: "top 0%",
        toggleActions: "play none none reverse",
        scrub: 0.2,
    }
});
gsap.to(".fly span:nth-child(6)", {
    x: 900,
    y: -600,
    rotate: 175,
    scrollTrigger: {
        trigger: ".fly span:nth-child(6)",
        start: "top 90%",
        end: "top 0%",
        toggleActions: "play none none reverse",
        scrub: 0.2,
    }
});


