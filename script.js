document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("banner-title");
    const text = title.textContent;
    title.textContent = ""; // Clear the title text

    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 100); // Adjust the speed here (100ms)
        }
    }

    typeLetter(); // Start the typing effect
});