
function WCM(){
    speechSynthesis.speak(new SpeechSynthesisUtterance('Bienvenido'))
}
var loader = document.querySelector(".cuento");
window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("dissappear")
}

const entradas = document.querySelector('.texts');



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.interimResults = true;

let parrafo = document.createElement('p');

rec.addEventListener('result', (e) =>{

    const lol = Array.from(e.results)

    .map(result => result[0])
    .map (result => result.transcript)
    .join('');
    parrafo.innerText = lol;
    entradas.appendChild(parrafo);
    var tiempoge = new Date();
    var horasge = tiempoge.getHours();

   if (e.results[0].isFinal) {
       //aquí comienzan las respuestas condicionadas a las preguntas
        if (lol.includes('Hola')) {
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Holi';
            entradas.appendChild(parrafo)
            
        }
        else if (lol.includes('Buenos días') || lol.includes('buenos días')) {
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            if (horasge > 12) {
                parrafo.innerText = 'Ya es tarde para decir buenos días jsjsjs';
            }
              else if (horasge > 18) {
                parrafo.innerText = 'Ya es muy noche como para decir buenos días jsjsjs';
            }
            else{
                parrafo.innerText = 'Buenos días';
            }
           
            entradas.appendChild(parrafo)
            
        }
       else if (lol.includes('buenas tardes') || lol.includes('Buenas tardes')){
           parrafo = document.createElement('p');
           parrafo.classList.add('respuesta');
           if (horasge > 18) {
               parrafo.innerText = "Ya es muy noche para decir buenas tardes jsjsjs";
           }
           else if (horasge < 12) {
            parrafo.innerText = "Aun es muy temprano para decir buenas tardes jsjsjs";
           }
           else{
            parrafo.innerText = "Buenas tardes";
           }
           entradas.appendChild(parrafo)
       }

     

    else if (lol.includes('Cuál es tu nombre') || lol.includes('cuál es tu nombre') || lol.includes('Cómo te llamas') || lol.includes('cómo te llamas')) {
                parrafo = document.createElement('p');
                parrafo.classList.add('respuesta');
                parrafo.innerText = 'Me llamo Alexa, ¿Con quién tengo el gusto?';
                entradas.appendChild(parrafo);
            }
    else if (lol.includes('cuántos años tienes') || lol.includes('Cuántos años tienes') || lol.includes('Qué edad tienes') || lol.includes('qué edad tienes')) {
                    parrafo = document.createElement('p');
                    parrafo.classList.add('respuesta');
                    parrafo.innerText = 'Soy un ser que fue creado en una computadora, para mí, los conceptos de vida y edad no aplican ni significan nada, ¿Qué edad tienes tú?';
                    entradas.appendChild(parrafo);
        }
    else if (lol.includes('Mi nombre es') || lol.includes('mi nombre es') || lol.includes('Yo me llamo') || lol.includes('yo me llamo')) {
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Mucho gusto, es un placer conocerte';
            entradas.appendChild(parrafo);
        }

        else if (lol.includes('buenas noches') || lol.includes('Buenas noches')){
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            if (horasge < 12) {
                parrafo.innerText = "Apenas vamos empezando el día para decir buenas noches jsjsjs";
            }
            else if (horasge < 18) {
             parrafo.innerText = "Aun estamos en la tarde como para decir buenas noches jsjsjs";
            }
            else{
             parrafo.innerText = "Buenas noches";
            }
            entradas.appendChild(parrafo)
        }

        //peticiones de acciones
    else if (lol.includes('Abre Facebook') || lol.includes('abre Facebook') || lol.includes('Abrir Facebook') || lol.includes('abrir Facebook') || lol.includes('ábreme Facebook') || lol.includes('Ábreme Facebook')) {
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Abriendo Facebook...';
            window.open('https://www.facebook.com')
            entradas.appendChild(parrafo);
        }
    else if (lol.includes('Abre YouTube') || lol.includes('abre YouTube') || lol.includes('Abrir YouTube') || lol.includes('abrir YouTube') || lol.includes('ábreme YouTube') || lol.includes('Ábreme YouTube')) {
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Abriendo YouTube...';
            window.open('https://www.youtube.com')
            entradas.appendChild(parrafo);
        }
        else if (lol.includes('Abre Whatsapp') || lol.includes('abre Whatsapp') || lol.includes('Abrir Whatsapp') || lol.includes('abrir Whatsapp') || lol.includes('ábreme Whatsapp') || lol.includes('Ábreme Whatsapp')) {
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Abriendo Whatsapp...';
            window.open('https://web.whatsapp.com/')
            entradas.appendChild(parrafo);
        }      
        //buscar en Google
        else if (lol.includes('Busca en internet') || lol.includes('busca en internet') || lol.includes('búscame en internet') || lol.includes('Búscame en internet')) {
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Buscando...';
            
            window.open('https://www.google.com/search?q=' + lol)
            entradas.appendChild(parrafo);
        }
        //chistes
        else if (lol.includes('Cuéntame un chiste') || lol.includes('cuéntame un chiste')) {
            parrafo = document.createElement('p');
            var chistoso = [
                "- ¿Tienes WiFi?- Sí-" + "\n" + "¿Y cuál es la clave?-" + "\n" + " Tener dinero y pagarlo.",
                "¿Te gusta el rock progresivo?" + "\n" + "- Cada vez más.",
                "- A mí me gustaría vivir en una isla desierta." + "\n" + "- A mí también." + "\n" + "- ¡Ya empezamos a llenarla, eh!",
                "¿Qué hay peor que encontrarse un gusano en una manzana?." + "\n" + " Encontrarse medio.",
                "¿Cómo se dice suegra en griego? " + "\n" + " Storbas.",
                "Llega un paciente a la consulta del médico, y dice:" + "\n" + " - Doctor, tengo un problema. Nadie me hace caso." + "\n" + " - Que pase el siguiente",
                "-¿Pero qué haces tirando esos portátiles al río?" + "\n" + " -¡Pero mira cómo beben los PC's en el río!",
                "¿Qué tienen en común un fin de semana y un murciélago?" +"\n" + "¡Ambos pasan volando!",
                "Cuando estas solter@ te gustan tod@s, pero cuando estas casad@ te gustan tod@s menos un@."
            ]
            parrafo.classList.add('respuesta');
            parrafo.innerText = chistoso[Math.floor(Math.random() * chistoso.length)];
            entradas.appendChild(parrafo);
        }
        //fin de chistes
        else if (lol.includes('Qué hora es') || lol.includes('qué hora es') || lol.includes('Qué horas son') || lol.includes('qué horas son')) {
            var tiempo = new Date();
            var hr = tiempo.getHours();
            var mn = tiempo.getMinutes();
            var tamañ;
            if (hr > 12) {
                hr = hr - 12;
                tamañ = "tarde"
                if (hr > 6) {
                    tamañ = "noche"
                }
               
            }
            
            else{
                tamañ = "mañana"
            }
            if (hr < 1) {
                hr = 12;
                tamañ = "mañana"
            }
           
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Son las ' + hr + ' de la '  + tamañ + ' con ' + mn + ' minutos';
            entradas.appendChild(parrafo);
         }
         else{
            parrafo = document.createElement('p');
            parrafo.classList.add('respuesta');
            parrafo.innerText = 'Lo siento comando de voz no identificado'
            entradas.appendChild(parrafo);
         }
        //fin de las preguntas
        parrafo = document.createElement('p');

    }

    console.log(lol);
})

rec.addEventListener('end', rec.start)
rec.start();

