let table;
let colonne = [];
let divisori0;
let divisori1;
let divisori2;
let divisori3;
let divisori4;
let side_padding = 20;
let padding = 20;
let size = 30; 
let rows;
let cols;
let contentWidth = 1000
let contentHeight;







function preload() {
  // put preload code here
  table = loadTable("assets/dataset.csv", "csv", "header");
}

function setup() {
  // put setup code here
  //const message =
    //"This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  /*textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);*/

   //prend0 la i-esima colonna del CSV (un array di stringhe)
  //converte ogni valore in numero intero
  //salva il risultato (array di numeri) dentro colonne[i].
  for(let i = 0; i < 5; i++ ){
        let colums = table.getColumn(i)
        colonne[i] =colums.map( i => int(i))
    };

   
   cols = floor((contentWidth - side_padding * 2) / (size + padding));
   rows = ceil(table.getRowCount() / cols);
   contentHeight = side_padding * 2 + rows * size + (rows - 1) * padding;

   


  
    //funzioni per trovare i divisori di ogni riga della colonna
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

// istanza per impaginare meglio
let sketch = function(p){
    p.setup = function(){
      p.createCanvas(contentWidth, contentHeight);
      p.background(0, 0, 0, 0,);
       

      

      

      
      p.drawRect = function(x, y, scala = 1, ruota = 0){

        p.rectMode(p.CENTER);
        p.translate(x, y);
        p.rotate(ruota);
        p.scale(scala);
        p.translate(-x, -y);

        p.noFill();
        p.stroke("#ffc300");
        p.strokeWeight(1);
        p.rect(x, y, size, size);
    }
    
    p.drawEmptyCircle = function(x, y, scala = 1, ruota = 0){
      p.translate(x, y);
        p.rotate(ruota);
        p.scale(scala);
        p.translate(-x, -y);

        p.noFill();
        p.stroke("#ffc300");
        p.strokeWeight(1);
        p.circle(x, y, size);
    }

    p.drawCircle = function(x, y, scala = 1, ruota = 0){
      p.translate(x, y);
        p.rotate(ruota);
        p.scale(scala);
        p.translate(-x, -y);
        p.fill("#ffc300")
        p.circle(x, y, size);

    }

    


  
  
  
  let colCount= 0;
  let rowCount = 0;
      
  for(let i = 0; i < colonne[0].length; i++ ){

   let x = side_padding + colCount * (size + padding);
   let y = side_padding + rowCount * (size + padding);

   
  
   if(colonne[0][i] % 1 === 0){
    p.drawRect(x, y)
   } 
   
   if(colonne[0][i] % 2 === 0){
      p.drawEmptyCircle(x, y)
   }
   p.push()
   if(colonne[0][i] % 3 === 0){
    p.drawRect(x, y, 0.3, 0.8)
   } 
   p.pop()

   p.push()
   if (colonne[0][i] % 5 === 0){
    p.drawCircle(x / 2, y / 2, 0.1)
   }
   p.pop()
   p.push()
   if (colonne[0][i] % 7 === 0){
    p.drawEmptyCircle(x / 2, y / 2, 0.3)
   }
   p.pop()
   p.push()
   if(colonne[1][i] % 1 === 0){
    p.drawRect(x, y,)
   } 
   p.pop()
   p.push()
   if(colonne[1][i] % 2 === 0){
      p.drawRect(x, y, 1, 0.8)
   }
   p.pop()
   p.push()
   if(colonne[1][i] % 3 === 0){
    p.drawCircle(x, y, 0.1,)
   } 
   p.pop()

   p.push()
   if (colonne[1][i] % 5 === 0){
    p.drawCircle(x / 2, y / 2, 0.1)
   }
   p.pop()
   p.push()
   if (colonne[1][i] % 7 === 0){
    p.drawEmptyCircle(x / 2, y / 2, 0.3)
   }
   p.pop()
   p.push()
   if(colonne[2][i] % 1 === 0){
    p.drawRect(x, y)
   } 
   p.pop()
   p.push()
   if(colonne[2][i] % 2 === 0){
      p.drawEmptyCircle(x, y)
   }
   p.pop()
   p.push()
   if(colonne[2][i] % 3 === 0){
    p.drawRect(x, y, 0.3, 0.8)
   } 
   p.pop()

   p.push()
   if (colonne[2][i] % 5 === 0){
    p.drawCircle(x / 2, y / 2, 0.1)
   }
   p.pop()
   p.push()
   if (colonne[2][i] % 7 === 0){
    p.drawEmptyCircle(x / 2, y / 2, 0.3)
   }
   p.pop()
   p.push()
   if(colonne[3][i] % 1 === 0){
    p.drawRect(x, y)
   } 
   p.pop()
   p.push()
   if(colonne[3][i] % 2 === 0){
      p.drawEmptyCircle(x, y)
   }
   p.pop()
   p.push()
   if(colonne[3][i] % 3 === 0){
    p.drawRect(x, y, 0.3, 0.8)
   } 
   p.pop()

   p.push()
   if (colonne[3][i] % 5 === 0){
    p.drawCircle(x / 2, y / 2, 0.1)
   }
   p.pop()
   p.push()
   if (colonne[3][i] % 7 === 0){
    p.drawEmptyCircle(x / 2, y / 2, 0.3)
   }
   p.pop()

   p.push()
   if(colonne[4][i] % 1 === 0){
    p.drawRect(x, y)
   } 
   p.pop()
   p.push()
   if(colonne[4][i] % 2 === 0){
      p.drawEmptyCircle(x, y)
   }
   p.pop()
   p.push()
   if(colonne[4][i] % 3 === 0){
    p.drawRect(x, y, 0.3, 0.8)
   } 
   p.pop()

   p.push()
   if (colonne[4][i] % 5 === 0){
    p.drawCircle(x / 2, y / 2, 0.1)
   }
   p.pop()
   p.push()
   if (colonne[4][i] % 7 === 0){
    p.drawEmptyCircle(x / 2, y / 2, 0.3)
   }
   p.pop()
    colCount++;
if (colCount === cols) {
  colCount = 0;
  rowCount++;
}
  }
  
}
}
