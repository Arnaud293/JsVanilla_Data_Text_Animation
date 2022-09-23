const target = document.getElementById('target');

let array = ["développeur", 'communicant', 'designer'];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 2800)
}

const loop = () => {

    setTimeout(() => {
        if(letterIndex < array[wordIndex].length){
            createLetter();
            letterIndex++;
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2800)
            
        }

    }, 150)

}
loop();