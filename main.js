const squares = document.querySelectorAll(".face > div");
const needColors = {
    left: 'rgb(0, 0, 255)',
    right: 'rgb(255, 0, 0)',
    top: 'rgb(255, 255, 0)',
};

setInterval(() => {
    checkColors();
}, 500);

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
}