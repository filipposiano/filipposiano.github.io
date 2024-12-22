document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "tecnologia",
        "web design",
        "innovazione sociale"
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 100; // Velocità di scrittura
    const erasingSpeed = 50; // Velocità di cancellazione
    const delayBetweenTexts = 1000; // Ritardo prima di cambiare parola
    
    const typingTextElement = document.getElementById("typing-text");
    
    function type() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            typingTextElement.textContent += texts[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }
    
    function erase() {
        if (currentCharIndex > 0) {
            typingTextElement.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }
    
    // Avvia l'effetto di scrittura
    type();
    
});

