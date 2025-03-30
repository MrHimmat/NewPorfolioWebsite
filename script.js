document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

gsap.to(".custom-cursor", {
    x: (e) => e.clientX,
    y: (e) => e.clientY,
    ease: "power2.out",
    duration: 0.2 
});
