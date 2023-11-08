const canvas = document.querySelector("#canvas")
const canvasHeight = document.querySelector("#canvas-height").value
const canvasWidth = document.querySelector("#canvas-width").value
canvas.style.height = "" + (canvasHeight*20) + "px"
canvas.style.width = "" + (canvasWidth*20) + "px"
console.log(canvas)

var totalPixels = canvasHeight * canvasWidth
for (let index = 0; index < totalPixels; index++) {
    const blankPx = document.createElement("div")
    blankPx.className = "pixels"
    blankPx.id = "px" + index
    canvas.appendChild(blankPx)
}