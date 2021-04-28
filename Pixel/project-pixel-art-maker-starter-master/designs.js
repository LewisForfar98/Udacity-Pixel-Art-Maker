const colorPick = document.getElementById("colorPick");
const sizePicker = document.getElementById("sizePicker");
const boxHeight = document.getElementById("inputHeight");
const boxWidth = document.getElementById("inputWidth");
const canvasBoard = document.getElementById("pixelCanvas");

function formSubmit(event) {
    event.preventDefault();
    const canvasBoard = document.getElementById("pixelCanvas");
    canvasBoard.innerHTML = "";
  };

sizePicker.addEventListener("click", function(event){
  formSubmit(event);
  makeGrid(boxHeight, boxWidth);
        })

function makeGrid(rows, cols){
  for (var r = 0; r < rows.value; r++) {
    var row = canvasBoard.insertRow(0);
    console.log(row)
    for (var c = 0; c < cols.value; c++) {
      var cell = row.insertCell(0);
        console.log(cell)
        cell.addEventListener("click", e => {
          e.target.style.background = colorPicker.value;
      });
    };
  };
};
