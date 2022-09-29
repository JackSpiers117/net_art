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



<!-- <script type='module'>
  document.body.style.margin   = 0
  document.body.style.overflow = `hidden`

    const cnv = document.getElementById ('fractal_tree_1')
    cnv.style.innerText = ("HowdyWorld")
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9.5 / 16
    cnv.style.height = `${cnv.height}px`
    cnv.style.cursor = `url("/Cursor.png"), auto`

    const ctx = cnv.getContext ('2d')

    // define a function to return a random value
    // between a minimum and maximum
    function rand_between (min, max) {
        const dif = max - min
        const off = Math.random () * dif
        return  min + off
    }

    // this function has been modified to recieve 
    // an options object housing angle and mult data
    function tree (base, stem, generation, options) {
        const end = base.clone ()
        end.add (stem)

        ctx.beginPath ()
        ctx.moveTo (base.x, base.y)
        ctx.lineTo (end.x, end.y)
        ctx.stroke ()


        if (generation > 0) {
            const L_stem = stem.clone ()

            // use the data in the options object
            // for the left angle
            L_stem.rotate (options.angle.l)

            // for the left multiplier
            L_stem.mult (options.mult.l)

            const R_stem = stem.clone ()

            // for the right angle
            R_stem.rotate (options.angle.r)

            // and for the right multiplier
            R_stem.mult (options.mult.r)

            const next_gen = generation - 1

            // pass the options object
            // on to the next generation
            tree (end, L_stem, next_gen, options)
            tree (end, R_stem, next_gen, options)
        }
    }

    const seed = new Vector (cnv.width / 2, cnv.height / 3)
    const shoot = new Vector (0, 150)

    // function for a new tree
    function new_tree () {

        // clear the canvas
        ctx.fillStyle = `pink`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        // create an options object
        // using object literal notation
        const options = {
            mult : {
                l : rand_between (0.5, 0.8),
                r : rand_between (0.5, 0.8),
            },

            angle : {
                l : rand_between (TAU / , TAU / 4) * -1,
                r : rand_between (TAU / 12, TAU / 4),
            }
        }

        // grow a tree using the options generated
        tree (seed, shoot, 10, options)
    }

    // assign the new_tree function to the 
    // .onclick property of the canvas
    cnv.onclick = new_tree

    // make a tree
    new_tree ()

    const subbutton = (`Subscrib Button.jpg`)

      subbutton.style.width  = `200px`
      subbutton.style.height = `65px`

      const subtrans_x = `translateX(${cnv.width /2 - 100}px)`
    const subtrans_y = `translateY(${cnv.height/2 - 650}px)`
    subbutton.style.transform = `${subtrans_x} ${subtrans_y}`
    subbutton.style.cursor = `url("/Cursor.png"), auto`

    ctx.append (subbutton)

const subbutton_mover = anime ({

            // targetting the sub button
            targets: subbutton,
            //making it go zoom like a sub button on those youtube outros
            duration: 2500,
            // rotating the sub button all the way around and landing straight
            rotate: `360deg`,
            // to make it scale 1.5x it's size
            scale: 1.5,
            //we want the thing to go back dont we? lets make this bad boy
            //alternate back to it's original position.
            direction: `alternate`,
            //making sure the subscribe button doesn't just play on web page open
            autoplay: false,
            // loop: false,
        })

    // telling the subbutton upon being clicked it has to play the mover method
    subbutton.onclick = () => subbutton_mover.play() -->