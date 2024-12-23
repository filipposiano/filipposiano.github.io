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
    
// //Cursore

// // create instance of kinet with custom settings
// var kinet = new Kinet({
//     acceleration: 0.10,
//     friction: 0.20,
//     names: ["x", "y"],
//   });
  
//   // select circle element
//   var circle = document.getElementById('circle');
  
//   // set handler on kinet tick event
//   kinet.on('tick', function(instances) {
//     circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
//   });
  
//   // call kinet animate method on mousemove
//   document.addEventListener('mousemove', function (event) {
//     kinet.animate('x', event.clientX - window.innerWidth/2);
//     kinet.animate('y', event.clientY - window.innerHeight/2);
//   });
  
//   // log
//   kinet.on('start', function() {
//     console.log('start');
//   });
  
//   kinet.on('end', function() {
//     console.log('end');
//   });

});



