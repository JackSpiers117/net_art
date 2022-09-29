
//building the array that lists all the horse nfts that the user can click and see.
img_array = ['/etc/HorseRider1.png','/etc/HorseRider2.png','/etc/HorseRider3.png','/etc/HorseRider4.png','/etc/HorseRider5.png','/etc/HorseRider6.png','/etc/HorseRiderDeluxe.png','/etc/HorseRiderPastel.png'];
i=0;
//building a button function that lets the user click and get a new image on the array
function myButton()
{
     i++;
    document.getElementById("myImg").src=img_array[i];
    //if statement declaring if the array hits the value of 1 then it 
    //goes back to the beginning of the first iteration
    if(i==img_array.length-1) {
   i=-1;
    }
}
//math used in Thomas Capegreco's Recursive Function tutorials, 
//http://thomas.capogre.co/rmit/ccs/2022/09/03/recursion.html
//I wanted to utilise the math and change some of the values to
//turn it into a thorny tentacle horror that wiggles around instead of a tree.
//with changes done to the values, in the math.PI * x value 
//you can even choose 1-2 for beauty, 4 for lovecraftian horror and 
//there was even 27 that made a real deal tentacle if you changed the
//values of the l and r's mult/angle. But I stuck to the horror tentacle thorn thing.
const TAU = Math.PI * 4

class Vector {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    add (w) {
        this.x += w.x
        this.y += w.y
    }
    mult (m) {
        this.x *= m
        this.y *= m
    }
    rotate (a) {
        // from "Formula for rotating a vector in 2D" by Matthew Brett
        // https://matthew-brett.github.io/teaching/rotation_2d.html

        const new_x = (this.x * Math.cos (a)) - (this.y * Math.sin (a))
        const new_y = (this.x * Math.sin (a)) + (this.y * Math.cos (a))

        this.x = new_x
        this.y = new_y
    }
    //placing a new vector object within the memory, and the 
    //clone will return it as a new object.
    clone () {
        return new Vector (this.x, this.y)
    }
}


class Creature {

    // constructing arguments
    constructor (base, stem, generation, options, ctx) {

        // giving all arguments properties
        this.base = base
        this.stem = stem
        this.generation = generation
        this.options = options
        this.ctx = ctx
        this.tentacle = []

        // if the generation becomes greater than 0 add a new section of the tentacle.
        if (generation > 0) this.add_tentacle ()

        //width of the sway, made it a bit large so the tentacles sway hard
        //like monsterous limbs
        this.sway_width = 0.10

        // random ish sway rate
        // as this.generation decreases
        // towards the top of the tree
        // the sway rate gets faster
        this.sway_rate  = Math.random () * 2 / this.generation
    }

    // additional tentacle method
    add_tentacle () {

        // this is to find the absolute position
        // of the end of the branch
        const end = this.base.clone ()

        // add the stem (relative position)
        // to the absolute position of the base
        end.add (this.stem)

        //cloning stems for the branches
        const L_stem = this.stem.clone()
        //Telling it to transform it's rotation 
        //and multiplier in the html javascript.
        L_stem.rotate (this.options.angle.l)
        L_stem.mult (this.options.mult.l)

        const R_stem = this.stem.clone()
        R_stem.rotate (this.options.angle.r)
        R_stem.mult (this.options.mult.r)

        //tried adding in a third "Middle" stem to experiment with make 
        //something more complex but it ended up nearly crashing or slowing the 
        //webpage everytime, so I've just commented it out below

        // const M_stem = this.stem.clone()
        // M_stem.rotate (this.options.angle.m)
        // M_stem.mult (this.options.mult.m)

        // decrease the generation number
        const next_gen = this.generation - 1

        // creating the left and right creature parts
        const left = new Creature (end, L_stem, next_gen, this.options, this.ctx)
        const right = new Creature (end, R_stem, next_gen, this.options, this.ctx)
        // const middle = new Creature (end, M_stem, next_gen, this.options, this.ctx)

        // push the tentacles
        this.tentacle.push (left)
        this.tentacle.push (right)
        // this.tentacle.push (middle)
    }

    // the draw funcion accepts a now argument
    // which is the time in seconds
    draw (now) {

        //swaying at a phase and rate with a remainder of 3
        //this lets me make a kind of slow lumbering monster limb sway
        const sway_phase = (now * this.sway_rate) % 3

        // turns the phase into a sinusoid
        // with an amplitude = this.sway_width 
        const sway_angle = Math.sin (sway_phase * TAU) * this.sway_width

        // we will make a new stem to rotate
        const sway_stem = this.stem.clone ()

        // rotate it with the sway angle
        sway_stem.rotate (sway_angle)

        // new absolute end point
        const end = this.base.clone ()

        // add the swaying stem to get
        // the new absolute position 
        // of the end of the stem
        end.add (sway_stem)

        // draw the line
        this.ctx.beginPath ()
        this.ctx.moveTo (this.base.x, this.base.y)
        this.ctx.lineTo (end.x, end.y)
        this.ctx.stroke ()

        // for each tentacle
        this.tentacle.forEach (t => {

            // assign an end clone
            t.base = end.clone ()

            // drawing the tentacle now
            t.draw (now)
        })
    }
}

