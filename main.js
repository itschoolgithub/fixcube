const squares = document.querySelectorAll(".face > div");
const needColors = {
    left: 'rgb(0, 0, 255)',
    right: 'rgb(255, 0, 0)',
    top: 'rgb(255, 255, 0)',
};

checkColors();

function checkColors() {
    squares.forEach(square => {
        const computed = getComputedStyle(square);
        const color = computed.getPropertyValue('background-color');
        let currectFace = 'left';
        for (face in needColors) {
            if (square.matches('.' + face + ' > div')) {
                currectFace = face;
            }
        }

        if (color == needColors[currectFace]) {
            square.classList.add('blink');
        } else {
            square.classList.remove('blink');
        }
    });

    calcProgress();

    setTimeout(() => {
        checkColors();
    }, 500);
}

function calcProgress () {
    const correct = document.querySelectorAll(".face > .blink")
    let progress = Math.floor((correct.length-3) * 100 / 24);
    document.querySelector('.progress').innerText = progress + '%';
}