let brushX = [];
let brushY = [];
let brushColor = [];

function setup() {
  createCanvas(400, 400);
  
  bg_color_picker = createColorPicker("#ffffff");
  brush_color_picker = createColorPicker("#000000");
  
}

function draw() { 
  brush_color = brush_color_picker.value()
  
  if(mouseIsPressed){
    fill(brush_color)
    stroke(brush_color)
    rect(mouseX - 3, mouseY - 3, 6, 6);
    
    brushX.push(mouseX - 3);
    brushY.push(mouseY - 3);
    brushColor.push(brush_color);
    
  }
  
  bg_color_picker.changed(redoStrokes);
}

function redoStrokes(){
  background(bg_color_picker.value());
  
  for(let i = 0; i <= brushX.length - 1; i += 1){
    fill(brushColor[i])
    stroke(brushColor[i])
    rect(brushX[i], brushY[i], 6, 6)
  }
}
