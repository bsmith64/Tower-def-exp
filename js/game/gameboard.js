// Draw Gameboard

var lastClicked;

var grid = clickableGrid(11,20,function(el,row,col,i){

    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.className='clicked';

    if (lastClicked) lastClicked.className='';
    lastClicked = el;

});

document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    grid.id = 'gameBoard';
    for (var r=0; r < rows; r++) {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0; c<cols; c++) {
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.id = "cell-" + ++i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}



var gb_width = document.getElementById('gameBoard').offsetWidth;
var gb_height = document.getElementById('gameBoard').offsetheight;

console.log('width: ' + gb_width);
console.log('height: ' + gb_height);






















