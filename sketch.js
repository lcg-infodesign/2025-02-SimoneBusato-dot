let table;
let colonne = [];
let divisori0;
let divisori1;
let divisori2;
let divisori3;
let divisori4;
let side_padding = 30;
let padding = 35;
let size = 40; 
let rows;
let cols;
let contentWidth = 1000
let contentHeight;
let rotazione = 0;

function preload() {
  table = loadTable("assets/dataset.csv", "csv", "header");
}

function setup() {
  for(let i = 0; i < 5; i++ ){
    let colums = table.getColumn(i)
    colonne[i] = colums.map(i => int(i))
  };

  cols = floor((contentWidth - side_padding * 2) / (size + padding));
  rows = ceil(table.getRowCount() / cols);
  contentHeight = side_padding * 2 + rows * size + (rows - 1) * padding;

  function findDivisors(num) {
    let divisors = [];
    let n = Math.abs(num);
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) divisors.push(i);
    }
    return divisors;
  }

  divisori0 = colonne[0].map(findDivisors);
  divisori1 = colonne[1].map(findDivisors);
  divisori2 = colonne[2].map(findDivisors);
  divisori3 = colonne[3].map(findDivisors);
  divisori4 = colonne[4].map(findDivisors);

  console.log(table);
  console.log("Colonne:", colonne);
  console.log("divisori colonna 0", divisori0)
  console.log("divisori colonna 1", divisori1)
  console.log("divisori colonna 2", divisori2)
  console.log("divisori colonna 3", divisori3)
  console.log("divisori colonna 4", divisori4)

  new p5(sketch, 'glyphs');
}


let sketch = function(p){
  p.setup = function(){
    p.createCanvas(contentWidth, contentHeight);
    
  }

  
  p.drawRect = function(x, y, scala = 1, ruota = 0){
    p.push();
    p.translate(x, y);
    p.rotate(ruota);
    p.scale(scala);
    p.rectMode(p.CENTER);
    p.noFill();
    p.stroke("#ffc300");
    p.strokeWeight(1);
    p.rect(0, 0, size, size);
    p.pop();
  }

  p.drawEmptyCircle = function(x, y, scala = 1, ruota = 0){
    p.push();
    p.translate(x, y);
    p.rotate(ruota);
    p.scale(scala);
    p.noFill();
    p.stroke("#ffc300");
    p.strokeWeight(1);
    p.circle(0, 0, size);
    p.pop();
  }

  p.drawCircle = function(x, y, scala = 1, ruota = 0){
    p.push();
    p.translate(x, y);
    p.rotate(ruota);
    p.scale(scala);
    p.noStroke();
    p.fill("#ffc300");
    p.circle(0, 0, size);
    p.pop();
  }

 
  p.drawShapes = function(value, x, y){
    if (value % 1 === 0) p.drawRect(x, y);
    if (value % 2 === 0){
      p.drawEmptyCircle(x, y);
      p.drawRect(x, y, 1, 0.8);
    }
    if (value % 3 === 0) p.drawRect(x, y, 0.3, rotazione);
    if (value % 5 === 0) p.drawCircle(x, y - 5, 0.1);
    if (value % 7 === 0) p.drawEmptyCircle(x, y + 5, 0.3);
  }

  p.draw = function(){
    
    p.clear();

    let colCount= 0;
    let rowCount = 0;

    for(let i = 0; i < colonne[0].length; i++ ){
      let x = side_padding + colCount * (size + padding);
      let y = side_padding + rowCount * (size + padding);

      for (let c = 0; c < 5; c++) {
        p.drawShapes(colonne[c][i], x, y);
      }

      colCount++;
      if (colCount === cols) {
        colCount = 0;
        rowCount++;
      }
    }

    // aggiorna la rotazione 1 volta per frame
    rotazione += 0.05;
  }
}

        
      

