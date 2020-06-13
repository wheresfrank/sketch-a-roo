console.log('Welcome to the best sketching website on this tab\n.......................................')

let gridSize = 16;
const canvas = document.getElementById('canvas');
const palette = document.getElementById('palette');

// All the pretty colors

const colorChoices = ['hsl(0,0%,0%)', 'hsl(180,25%,25%)', 'hsl(0,0%,50%)', 'hsl(0,0%,75%)', 
                    'hsl(0,0%,86%)', 'hsl(30,67%,94%)', 'hsl(180,100%,97%)', 'hsl(0,0%,100%)', 
                    'hsl(0,100%,27%)', 'hsl(0,100%,50%)', 'hsl(0,79%,72%', 'hsl(18,100%,73%)', 
                    'hsl(16,100%,50%)', 'hsl(9,100%,64%)', 'hsl(39,100%,50%)', 'hsl(51,100%,50%)', 
                    'hsl(56,38%,58%)', 'hsl(60,100%,50%)', 'hsl(54,77%,75%)', 'hsl(54,100%,90%)', 
                    'hsl(120,100%,20%)', 'hsl(120,100%,25%)', 'hsl(120,100%,50%)', 'hsl(120,93%,79%)', 
                    'hsl(180,100%,25%)', 'hsl(182,25%,50%)', 'hsl(180,100%,50%)', 'hsl(180,65%,81%)',
                    'hsl(240,100%,27%)', 'hsl(240, 100%, 50%)', 'hsl(219,79%,66%)', 'hsl(203,92%,75%)', 
                    'hsl(273,100%,27%)', 'hsl(296,100%,27%)', 'hsl(300,100%,50%)', 'hsl(300,47%,75%)', 
                    'hsl(322,81%,43%)', 'hsl(328,100%,54%)', 'hsl(330,100%,71%)', 'hsl(350,100%,88%)',
                    'hsl(0,100%,25%)', 'hsl(4,66%,39%)', 'hsl(34,44%,69%)', 'hsl(28,100%,90%)'];

const rainbow = ['hsl(0,100%,50%)', 'hsl(16,100%,50%)', 'hsl(39,100%,50%)', 'hsl(48, 100%, 50%)', 
                'hsl(60,100%,50%)', 'hsl(90, 100%, 50%)', 'hsl(120,100%,25%)', 'hsl(180,100%,50%)', 
                'hsl(240, 100%, 50%)', 'hsl(275, 100%, 25%)', 'hsl(271, 76%, 53%)', 
                'hsl(300, 76%, 72%)', 'hsl(300, 100%, 50%)'];

function convertHSLA(bg) {
    var hsla = {
        'hsl(0,0%,0%)':'black', 'hsl(180,25%,25%)':'dark slate gray', 'hsl(0,0%,50%)':'gray', 
        'hsl(0,0%,75%)':'silver', 'hsl(0,0%,86%)':'gainsboro', 'hsl(30,67%,94%)':'linen', 
        'hsl(180,100%,97%)':'azure', 'hsl(0,0%,100%)':'white', 'hsl(0,100%,27%)':'dark red', 
        'hsl(0,100%,50%)':'red', 'hsl(0,79%,72%':'light coral', 'hsl(18,100%,73%)':'light salmon', 
        'hsl(16,100%,50%)':'orange red', 'hsl(9,100%,64%)':'tomato', 'hsl(39,100%,50%)':'orange', 
        'hsl(51,100%,50%)':'gold', 'hsl(56,38%,58%)':'dark khaki', 'hsl(60,100%,50%)':'yellow', 
        'hsl(54,77%,75%)':'khaki', 'hsl(54,100%,90%)':'lemon chiffon', 'hsl(120,100%,20%)':'dark green', 
        'hsl(120,100%,25%)':'green', 'hsl(120,100%,50%)':'lime', 'hsl(120,93%,79%)':'palegreen', 
        'hsl(180,100%,25%)':'teal', 'hsl(182,25%,50%)':'cadet blue', 'hsl(180,100%,50%)':'cyan', 
        'hsl(180,65%,81%)':'pale turquoise', 'hsl(240,100%,27%)':'navy', 'hsl(240, 100%, 50%)':'blue', 
        'hsl(219,79%,66%)':'cornflower blue', 'hsl(203,92%,75%)':'light sky blue', 'hsl(273,100%,27%)':'indigo', 
        'hsl(296,100%,27%)':'purple', 'hsl(300,100%,50%)':'fuchsia', 'hsl(300,47%,75%)':'plum', 
        'hsl(322,81%,43%)':'medium violet red', 'hsl(328,100%,54%)':'deep pink', 'hsl(330,100%,71%)':'hot pink', 
        'hsl(350,100%,88%)':'pink', 'hsl(0,100%,25%)':'maroon', 'hsl(4,66%,39%)':'brown', 
        'hsl(34,44%,69%)':'tan', 'hsl(28,100%,90%)':'bisque'
        };

        return hsla[bg]; 
};

            

// Build canvas to sketch on

function makeGrid(gridSize) {

    canvas.style.setProperty('--grid-rows', gridSize);
    canvas.style.setProperty('--grid-cols', gridSize);

    for (var x = 0; x < (gridSize * gridSize); x++) {

        var cell = document.createElement('div');
        cell.id = 'cell' + (x + 1);
        cell.style.backgroundClip = 'white';
        canvas.appendChild(cell).className = 'cell';
    };
        
};    

makeGrid(gridSize);

// Build palette of colors to pick from

function pickColor() {

    palette.style.setProperty('--grid-rows', 10);
    palette.style.setProperty('--grid-cols', 4);

    for (var n = 0; n < colorChoices.length; n++) {
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
    
    console.log('Using pretty ' + convertHSLA(bg) + ' paint');
   
};

// Draw with all the colors of the rainbow


function drawRainbow() {

    var cell = document.getElementById('canvas').querySelectorAll('.cell');
    document.getElementById('activeColor').style.cssText = 'background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);';
    var ri = 0;
    for (i = 0; i < cell.length; i++) {
        cell[i].onmouseenter = function(){
            ri++;
            if (ri == rainbow.length) {
                ri = 0;
            };

            rc = rainbow[ri];
            this.style.backgroundColor = rc;                    
        };
    };

    console.log('Drawing with the colors of the rainbow');

};

function darken() {
    var cell = document.getElementById('canvas').querySelectorAll('.cell');
    bg = cell[1].style.backgroundColor
    console.log(bg)
    
}
darken();
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