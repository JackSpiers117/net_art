
document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const canvas = document.getElementById('webCanvas')
canvas.width = canvas.parentNode.scrollWidth
canvas.height = canvas.width * 9 / 15
canvas.style.height = `${canvas.height}px`
canvas.style.backgroundColor = `blue`
// const ctx = canvas.getContext('2d')
  
var img = 'Cursor.png'

cnv.style.cursor = `none`

// ... and then you can render the cursor manually with something like:

const pointer = { x : 0, y : 0 }

cnv.onpointermove = e => {
pointer.x = e.offsetX
pointer.y = e.offsetY
}

draw_frame; () => { 
cnv.drawImage (img, pointer.x, pointer.y)
requestAnimationFrame (draw_frame)
}

requestAnimationFrame (draw_frame)







// const myImage = new Image(500,580);
// myImage.src = 'HorseRider1.png';
// const cnv  = document.createElement ('canvas')

// cnv.width  = 1920
// cnv.height = 1080
// document.body.appendChild (cnv)
// const ctx = cnv.getContext (`2d`)
// ctx.fillStyle = `lightgreen`
// ctx.fillRect (0, 0, cnv.width, cnv.height)




