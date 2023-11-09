const canvas = document.createElement("div")
canvas.id = "canvas"
const canvasSize = document.querySelectorAll(".canvasSize")
var canvasHeight = document.querySelector("#canvas-height").value
var canvasWidth = document.querySelector("#canvas-width").value

function generateCanvas(h, w){
    var pixelHeightSize = 512/h
    var pixelWidthSize = 512/w
    canvas.style.height = "" + (h*pixelHeightSize) + "px"
    canvas.style.width = "" + (w*pixelWidthSize) + "px"
    document.body.appendChild(canvas)
    var totalPixels = h * w
    for (let index = 0; index < totalPixels; index++) {
        const blankPx = document.createElement("div")
        blankPx.className = "pixels"
        blankPx.id = "px" + index
        console.log(blankPx)
        blankPx.style.height = pixelHeightSize + "px"
        blankPx.style.width = pixelWidthSize + "px"
        canvas.appendChild(blankPx)
    }
    
    var pixels = document.querySelectorAll(".pixels")
    console.log(pixels)
    pixels.forEach((item) => {
        item.onmouseenter = () => {
            console.log(item.style.backgroundColor)
            item.style.backgroundColor = "black"
        }
    })
}

function clearCanvas(){
    var oldPixels = document.querySelectorAll(".pixels")
    oldPixels.forEach((item) => {
        item.remove()
    })
}

generateCanvas(canvasHeight, canvasWidth)

const newCanvasBtn = document.querySelector("#newCanvasBtn")
newCanvasBtn.addEventListener("click", () => {
    clearCanvas()
    var canvasNewHeight = document.querySelector("#canvas-height").value
    var canvasNewWidth = document.querySelector("#canvas-width").value
    generateCanvas(canvasNewHeight, canvasNewWidth)
})