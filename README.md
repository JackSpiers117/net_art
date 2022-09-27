# net_art
<script src=p5.js></script> 
    <script src=script.js></script> 
    <!-- <script src='https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js'> -->
    </script>
    <!-- <div id=rotating_square></div>

    <script type=module>
    
        // getting and formatting the outer div
        const div = document.getElementById (`rotating_square`)
        div.width = div.parentNode.scrollWidth
        div.height = div.width * 9 / 16
        div.style.height = `${div.height}px`
        div.style.backgroundColor = `grey`
    
        // making a square pink div
        const square = document.createElement (`div`)
        square.style.width  = `400px`
        square.style.height = `130px`
        square.style.backgroundColor = `gold`
        square.style.textcolor = 'black'
        square.style.text = "Subscrib"
        square.style.position = `relative`
    
        // using the style.transform property to move the div
        const trans_x = `translateX(${ div.width /2 - 50 }px)`
        const trans_y = `translateY(${ div.height/2 - 50 }px)`
        square.style.transform = `${ trans_x } ${ trans_y }`
    
        // attaching the square div to the outer div
        div.append (square)
    
    
        // the anime () function will return an object
        // we can use to control the animation
        const square_mover = anime ({
    
                // remember the s at the end of targets!
                targets: square,
                duration: 3000,
    
                // this will rotate the div 
                // via its style.transform property
                rotate: `315deg`,
    
                // this will scale the div
                // via its style.transform property
                scale: 2,
    
                // makes it animate in both directions
                direction: `alternate`,
    
                // will not autoplay
                autoplay: false,
            })
    
        // registering the square_mover.play () method
        // to the onclick event listener
        div.onclick = () => square_mover.play ()
    </script> -->









    const ctx = cnv.getContext (`2d`)
ctx.fillStyle = `turquoise`
ctx.fillRect (0, 0, cnv.width, cnv.height)

let x_pos = -100 // initialise mutable variable
                 // outside draw_frame function

// pass in the name of the function
// requestAnimationFrame will call it
requestAnimationFrame (draw_frame)

// define the function you want
// requestAnimationFrame to call
function draw_frame () {

    // draw the background
    ctx.fillStyle = `turquoise`
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    // draw the pink square at its current x-coordinate
    ctx.fillStyle = `hotpink`
    ctx.image (, 150, 100, 100)

    // increment the x-coordinate
    x_pos += 1

    // respawn it on the left once it is out of frame
    if (x_pos > 400) {
        x_pos = -100
    }

    // call the next frame
    requestAnimationFrame (draw_frame)
}










// function setup() {

//     createCanvas (window.innerWidth, window.innerHeight)
//     let div = createDiv('').size(300,300);
//     div.style('background-color', 'green');
//     div.center()
// }



// function draw (){
//     background ('pink')
//     fill('green')
//     // center(align);
//     // square(700,300,300)
    
// }