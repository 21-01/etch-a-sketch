const canvas = document.createElement("div")
canvas.id = "canvas"
var canvasSizes = document.querySelector("#canvasSize").value

function generateCanvas(canvasSizes){
    var pixelHeightSize = 512/canvasSizes
    var pixelWidthSize = 512/canvasSizes
    canvas.style.height = "" + (canvasSizes*pixelHeightSize) + "px"
    canvas.style.width = "" + (canvasSizes*pixelWidthSize) + "px"
    document.body.appendChild(canvas)
    var totalPixels = canvasSizes * canvasSizes
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
            item.style.backgroundColor = changeColor
        }
    })
}

function clearCanvas(){
    var oldPixels = document.querySelectorAll(".pixels")
    oldPixels.forEach((item) => {
        item.remove()
    })
}

generateCanvas(canvasSizes)

const newCanvasBtn = document.querySelector("#newCanvasBtn")
newCanvasBtn.addEventListener("click", () => {
    clearCanvas()
    var canvasNewSize = document.querySelector("#canvasSize").value
    generateCanvas(canvasNewSize)
})