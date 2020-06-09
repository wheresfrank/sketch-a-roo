console.log('Welcome to the best sketching website on this tab\n.......................................')

let gridSize = 16;
const canvas = document.getElementById('canvas');
const palette = document.getElementById('palette');

// All the pretty colors

const colorChoices = ['black', 'white', 'red', 'blue', 'yellow', 'green', 'orange', 'purple', 'brown', 'aqua', 'chartreuse', 'crimson', 'darkgray', 'deeppink', 'dodgerblue',
                        'gold', 'lavender', 'indigo', 'lightgreen', 'maroon', 'lime', 'navy', 'orangered', 'paleTurquoise', 'plum', 'peru', 'seagreen', 'slateblue', 'tomato',
                        'teal', 'darkslategray', 'darkorchid', 'darkgoldenrod', 'linen', 'mistyrose', 'mediumseagreen', 'sienna', 'springgreen', 'fuchsia', 'indianred' ];

let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']                        

// Build canvas to sketch on

function makeGrid(gridSize) {

    canvas.style.setProperty('--grid-rows', gridSize);
    canvas.style.setProperty('--grid-cols', gridSize);

    for (var x = 0; x < (gridSize * gridSize); x++) {

        var cell = document.createElement('div');
        cell.id = 'cell' + (x + 1);
        canvas.appendChild(cell).className = 'cell';
    };
        
};    

makeGrid(gridSize);

// Build palette of colors to pick from

function pickColor() {

    palette.style.setProperty('--grid-rows', 10);
    palette.style.setProperty('--grid-cols', 4);

    for (var n = 0; n < 40; n++) {
        let pad = document.createElement('div');
        pad.style.backgroundColor = colorChoices[n];
        let bg = colorChoices[n];       
        pad.onclick = function() { 
            changeColor(bg);
        };
        palette.appendChild(pad).className = 'pad';
    };       
};

pickColor();

// Draw with chosen color

function changeColor(bg) { 

    var cell = document.getElementById('canvas').querySelectorAll('.cell');
    document.getElementById('activeColor').style.cssText = "background-color: " + bg + ";";

    for (i = 0; i < cell.length; i++) {
        cell[i].onmouseenter = function(){
            this.style.backgroundColor = bg;
        };
        
    };
    
    console.log('Using pretty ' + bg + ' paint');
   
};

// Draw with all the colors of the rainbow


function drawRainbow() {

    var cell = document.getElementById('canvas').querySelectorAll('.cell');
    document.getElementById('activeColor').style.cssText = 'background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);';
    var ri = 0;
    for (i = 0; i < cell.length; i++) {
        cell[i].onmouseenter = function(){
            ri++;
            if (ri > 6) {
                ri = 0;
            };

            rc = rainbow[ri];
            this.style.backgroundColor = rc;                    
        };
    };

    console.log('Drawing with the colors of the rainbow');

};

// Change canvas resolution

var res = document.getElementById('res');
res.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('resBtn').click();
    };
});

function pickResolution() {
       
    var res = document.getElementById('res').value;
    var int = Number(res);
    console.log('Changed canvas resolution to ' + res + ' x ' + res);

    if (int < 1 || int > 100) {
        alert('Hey! Pick a number between 1 -100.');
    } else if (isNaN(int)) {
        alert('Ok Smarty Pants, "' + res + '" isn\'t a number...\nTry putting in a number.');
    } else {
        document.getElementById('canvas').innerHTML = "";
        let gridSize = res;
        makeGrid(gridSize);
    };
};