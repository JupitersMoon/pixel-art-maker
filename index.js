//
// PIXEL ART MAKER
// STEVEN HENDRICKS
//  ~~ WITH EMOTIONAL SUPPORT FROM CALEB ~~

// AREA TO CONTAIN THE BOX OF PIXELS (DIVS)
var container = document.createElement('div');
// PLACE TO STORE THE SELECTED COLOR TO PAINT WITH
var savedColor = '';
// PLACE TO STORE THE COLOR PALLATE TO CHOOSE FROM
var colorPal = document.createElement('div');


// LISTEN FOR A CLICK WITHIN THE CONTAINER THEN RUN changeColor FUN
container.addEventListener('mousedown', changeColor);
// LISTEN/SAVE CHOSEN COLOR TO PAINT WITH FROM THE COLOR PALLATE
colorPal.addEventListener('mousedown', function(){
  savedColor = event.target.style.backgroundColor;
  // body.style.cursor = 'savedColor';
  //console.log(savedColor);
  // event.target.style.cursor = savedColor;
  colors[31].style.backgroundColor = savedColor;
  // console.log(event.target.style.cursor);
});

// CHANGE APPROPRIATE DIV WITH THE SELECTED COLOR
function changeColor() {
  event.target.style.backgroundColor = savedColor;
    container.addEventListener('mouseover', changeColor);
    container.addEventListener('mouseup', function() {
      container.removeEventListener('mouseover', changeColor);

    });
}//  container.removeEventListener('mouseup', changeColor)

// CREATE OVERALL CONTAINER SIZE/STYLING
container.classList.add('container');
container.style.width = '1300px';
container.style.height = '650px';
container.style.boxShadow = '0 0 5em #000000';
//container.style.borderRadius = '40px';
container.style.backgroundColor = '#ffffff';
container.style.border = '2px solid #000000';
//box-shadow: inset 0 0 1em gold, 0 0 1em red;

// GO-TO BODY TAG, APPEND CONTAINER TO BODY
var body = document.getElementsByTagName('body')[0];
body.appendChild(container);
body.style.backgroundColor = '#416b5c';
body.style.fontFamily = 'Orbitron', 'sans-serif';

//body.style.float = 'center';
//font-family: 'Orbitron', sans-serif;

// BUILD ALL OF THE PAINTING PIXELS (DIVS)
for (var i = 0; i < 8450; i++) {
var div = document.createElement('div');
  container.appendChild(div);
  div.classList.add('pixel');
  div.style.width = '8px';
  div.style.paddingBottom = '8px';
  div.style.float = 'left';
  div.style.border = '1px solid #909b97';
  //div.style.borderRadius = '40px';
} // console.log(container);

//
// CREATE COLOR CHOICES  ~~~~~
//
// APPEND/SIZE THE OVERALL COLOR PALLATE
body.appendChild(colorPal);
colorPal.style.width = '1000x';
colorPal.style.height = '32px';
//console.log(colors);

// CREATE THE COLOR PALLATE BOXES
for (var i = 0; i < 32; i++) {
  var div = document.createElement('div');
    colorPal.appendChild(div);
    div.classList.add('colorChoice');
    div.style.width = '30px';
    div.style.paddingBottom = '30px';
    div.style.float = 'left';
    div.style.border = '2px solid #000000';
    div.style.borderRadius = '40px';
}

// var selectedColor = document.createElement('div')
// colorPal.appendChild(selectedColor)

// FILL IN THE COLORS OF THE COLOR PALLATE
var colors = document.getElementsByClassName('colorChoice');
colors[0].style.backgroundColor = '#ff0000';
colors[1].style.backgroundColor = '#ff2e00';
colors[2].style.backgroundColor = '#ff6100';
colors[3].style.backgroundColor = '#ff9900';
colors[4].style.backgroundColor = '#ffbf00';
colors[5].style.backgroundColor = '#ffe900';
colors[6].style.backgroundColor = '#e9ff00';
colors[7].style.backgroundColor = '#b6ff00';
colors[8].style.backgroundColor = '#83ff00';
colors[9].style.backgroundColor = '#50ff00';
colors[10].style.backgroundColor = '#15ff00';
colors[11].style.backgroundColor = '#00ff21';
colors[12].style.backgroundColor = '#00ff5d';
colors[13].style.backgroundColor = '#00ff90';
colors[14].style.backgroundColor = '#00ffcb';
colors[15].style.backgroundColor = '#00ffff';
colors[16].style.backgroundColor = '#00c7ff';
colors[17].style.backgroundColor = '#0090ff';
colors[18].style.backgroundColor = '#005dff';
colors[19].style.backgroundColor = '#0026ff';
colors[20].style.backgroundColor = '#1500ff';
colors[21].style.backgroundColor = '#5000ff';
colors[22].style.backgroundColor = '#8700ff';
colors[23].style.backgroundColor = '#bf00ff';
colors[24].style.backgroundColor = '#f600ff';
colors[25].style.backgroundColor = '#ff00d4';
colors[26].style.backgroundColor = '#ff00a1';
colors[27].style.backgroundColor = '#ff006a';
colors[28].style.backgroundColor = '#ff003b';
colors[29].style.backgroundColor = '#ffffff';
colors[30].style.backgroundColor = '#000000';
