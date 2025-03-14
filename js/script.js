document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect
    window.addEventListener("scroll", function () {
        const scrolled = window.pageYOffset;
        document.body.style.backgroundPositionY = -(scrolled * 0.5) + "px";
    });

    // Tugmani bosganda copy qilish
    let copyButton = document.querySelector(".copy-button");
    if (copyButton) {
        copyButton.addEventListener("click", copyToClipboard);
    }
});

// Kontrakt manzilini nusxalash funksiyasi
function copyToClipboard() {
    let copyButton = document.querySelector(".copy-button");
    if (!copyButton) return;

    let contractAddress = copyButton.getAttribute("data-contract"); // Atributdan olish

    if (!contractAddress) {
        console.error("Kontrakt manzili topilmadi.");
        return;
    }

    navigator.clipboard.writeText(contractAddress).then(() => {
        let successMessage = document.getElementById("copy-success");
        successMessage.style.display = "inline"; // Ko‘rsatish
        setTimeout(() => {
            successMessage.style.display = "none"; // 2 soniyadan keyin yo‘qoladi
        }, 2000);
    }).catch(err => {
        console.error("Nusxalashda xatolik yuz berdi", err);
    });
}
