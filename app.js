let btn = document.querySelector("#btn");
btn.addEventListener("click", Speech);

function Speech() {
     window.SpeechRecognition =
       window.SpeechRecognition || window.webkitSpeechRecognition;

       let recognition = new SpeechRecognition();


        let p = document.createElement("p");
        let words = document.querySelector(".words");
        words.appendChild(p);


       //need call dom events
       recognition.addEventListener("result", (e) => {
           let transcript = [...e.result]
           .map((result) => result[0])
           .map((result) => result.transcript)
           .join("");
           p.textContent = transcript;
           if (e.result[0].isFinal) {
            p = document.createElement("p");
            words.appendChild(p);
           }
       });

       //restart recognition
       recognition.addEventListener("end", recognition.start);

       //start recognition
       recognition.start();
}