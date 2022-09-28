// <!-- ignore this code below hid it as I was going to work on making a horse racing game between 2 users where the fasted key inputs win
// but then like the rest of the code it broke and html is a pain when it comes to working out the layers and organisation and divs yeesh,
// going to either try again with a new future project post-semester or just scrap it all altogether, either way will delete in the submission-->


//   <!-- <div id= "hos1"> <img  width="100" height="200" src="/etc/HorseRider1.png" /> </div>
//   <-!-- <img width="100" height="200" src="etc/HorseRider1.png" /> -->
//   <!-- <script src=script.js></script>
//   <script src=p5.js></script> -->
//   <!-- <img id="leHorse1" src="HorseRider1.png" alt="The Jockeynhishorse" width="500" height="500"> -->
//   <!-- <script>
//   function myHorseys() {
//   var x = document.getElementById('leHorse1').src;
//   document.getElementById("lehorse").innerHTML = x;
//   }
// //  var x = document.createElement("IMG");\
// //   var x = document.getElementById("myImg"); 
//   </script> --> 

//writing the audio
// const btn = document.getElementById ('tone_switch')
//     btn.innerText = 'Press for tone!' // give it some text
//     btn.value = '10'                 // give it a value

//     // declare a function for toggling the sound
//     function toggle_sound () {

//         // if button value is 'off'
//         if (btn.value == 'off') {

//             // set the gain to 0.3
//             amp_node.gain.value = 0.3

//             // set the value to 'on'
//             btn.value = 'on'

//             // change the text
//             btn.innerText = 'Press to stop!'
//         }

//         // if button value is `on`
//         else if (btn.value = 'on') {

//             // set the gain to 0
//             amp_node.gain.value = 0

//             // set the value to `off`
//             btn.value = 'off'

//             // change the text
//             btn.innerText = 'Press for tone!'
//         }
//     }

//     // this is the click handler for the button
//     // we are using arrow notation to write
//     // a function with no name
//     // ie. an anonymous function
//     btn.onclick = () => {

//         // if the audio context is still suspended
//         // resume the audio context first
//         if (audio_context.state != 'running') init_audio ()

//         // then call the toggle sound function
//         toggle_sound ()
//     }





























{/* <div id='resume_audio'></div>

<script>
    // get and format div element

    const div_0  = document.getElementById ('resume_audio')
    div_0.width  = div_0.parentNode.scrollWidth
    div_0.style.height     = `${ div_0.width * 10 / 16 }px`
    div_0.style.textAlign  = 'center'
    div_0.style.lineHeight = div_0.style.height
    div_0.style.fontSize   = '36px'
    div_0.style.fontWeight = 'bold'
    div_0.style.fontStyle  = 'italic'
    div_0.style.color      = 'white'
    div_0.style.backgroundColor = 'hotpink'

    // get and suspend audio context
    const audio_context = new AudioContext ()
    audio_context.suspend ()

    // create string with context state
    const init_msg = `click here for something annoying`

    // convert string to uppercase and pass to div element
    div_0.innerText = init_msg.toUpperCase ()

    // define an async click handler function 
    async function init_audio () {

        // wait for audio context to resume
        await audio_context.resume ()

        // then set background colour
        div_0.style.backgroundColor = 'limegreen'

        // create string with new context state
        const msg = `whoops i forgot the off button`

        // unitalicise text style
        div_0.style.fontStyle  = 'normal'

        // convert to uppercase and pass to div element
        div_0.innerText = msg.toUpperCase ()
    }

    // pass anonymous function to the .onclick property
    // of the div element
    div_0.onclick = _ => {

        // if audio context is not running
        if (audio_context.state != 'running') {
            
            // call the async init audio function
            init_audio ()
        }
      }
      // store a new oscillator node in a variable
const osc_node = audio_context.createOscillator ()

// oscillators come in four flavours:
// sine, triangle, sawtooth, and square
// sonically, sine is the simplest
// giving a pure note with no harmonics
osc_node.type = 'sine'

// this is the oscillations per second
// or Hertz (Hz)
// of the oscillator
osc_node.frequency.value = 500

// store a new gain node in a variable
const amp_node = audio_context.createGain ()

// set the gain of that node to 0
// ie. don't let any sound through
amp_node.gain.value = 0

// connect the oscillator node
// to the gain node
osc_node.connect (amp_node)

// connect the gain node to
// the audio output device
// on the audio context
amp_node.connect (audio_context.destination)

// start the oscillator
osc_node.start ()





function play_note (note, length) {

// if the audio context is not running, resume it
if (audio_context.state != 'running') init_audio ()

// create an oscillator
const osc = audio_context.createOscillator ()

// make it a triangle wave this time
osc.type            = 'triangle'

// set the value using the equation 
// for midi note to Hz
osc.frequency.value = 440 * 2 ** ((note - 69) / 12)

// create an amp node
const amp = audio_context.createGain ()

// connect the oscillator 
// to the amp
// to the audio out
osc.connect (amp).connect (audio_context.destination)

// the .currentTime property of the audio context
// contains a time value in seconds
const now = audio_context.currentTime

// make a gain envelope
// start at 0
amp.gain.setValueAtTime (0, now)

// take 0.02 seconds to go to 0.4, linearly
amp.gain.linearRampToValueAtTime (0.4, now + 0.02)

// this method does not like going to all the way to 0
// so take length seconds to go to 0.0001, exponentially
amp.gain.exponentialRampToValueAtTime (0.0001, now + length)

// start the oscillator now
osc.start (now)

// stop the oscillator 1 second from now
osc.stop  (now + length)
}

</script> */}


//in case of emergency, break glass

// <!DOCTYPE html>
// <html>
// <body>
//   <!-- <script src='script.js'></script> -->
//   <script src='https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js'></script>
//   <div id=rotating_subbutton> </div>
//   <img id="subscribeButton" src="Subscrib Button.jpg" alt="The Subcription Button" width="304" height="228">
//   <img id="horseButton" src="etc/HorseRider1.png" alt="horseriyda" width="304" height="228">
//   <img id="ecommerceTitle" src="ecommerceTitle.png" alt="timetoshop" width = "300" height = "200">
//   <!-- <div id=rotating_subbutton><button id='tone_switch'></button></div> -->
//   <!-- <img id="Cursor" src="Cursor.png" alt="Clickey Boy" width="64" height="64"> -->
//   <!-- <canvas id="webCanvas"></canvas> -->


// <script type=module>

//     document.body.style.margin   = 0
//     document.body.style.overflow = `hidden`
//     //creating a canvas I think? Kind of confusing when I try doing this in javascript so not sure
//     const subs = document.getElementById (`rotating_subbutton`)
//     subs.width = subs.parentNode.scrollWidth
//     subs.height = subs.width * 9 / 15
//     subs.style.height = `${subs.height}px`
//     subs.style.backgroundColor = `lightpink`
//     subs.style.cursor = `url("/Cursor.png"), auto`


// // Hide from here--- VVVVVVV


// // subs.style.cursor = `none`

// // const pointer = { x : 0, y : 0 }

// //     subs.onpointermove = e => {
// //     pointer.x = e.offsetX
// //     pointer.y = e.offsetY
// //     }

// //     draw_frame; () => { 
// //     subs.drawImage (Cursor, pointer.x, pointer.y)
// //     requestAnimationFrame (draw_frame)
// //     } 

// // ------to here to see progress with the subbutton ^^^^^^^^



//     // making the subbutton
//     const subbutton = document.getElementById (`subscribeButton`)
//     // subbutton.style.textColor "black"
//     // subbutton.style.textSize '100px'
//     subbutton.style.width  = `200px`
//     subbutton.style.height = `65px`
//     // subbutton.style.backgroundColor = `gold`
//     // subbutton.style.position = `relative`

//     const trans_x = `translateX(${subs.width /2 - 50}px)`
//     const trans_y = `translateY(${subs.height/2 - 250}px)`
//     subbutton.style.transform = `${trans_x} ${trans_y}`

//     subs.append (subbutton)
//     // subs.append (Cursor)


//     const subbutton_mover = anime ({

//             // targetting the sub button
//             targets: subbutton,
//             //making it go zoom like a sub button on those youtube outros
//             duration: 2500,
//             // rotating the sub button all the way around and landing straight
//             rotate: `360deg`,
//             // to make it scale 1.5x it's size
//             scale: 1.5,
//             //we want the thing to go back dont we? lets make this bad boy
//             //alternate back to it's original position.
//             direction: `alternate`,
//             //making sure the subscribe button doesn't just play on web page open
//             autoplay: false,
//             // loop: false,
//         })

//     // telling the subbutton upon being clicked it has to play the mover method
//     subbutton.onclick = () => subbutton_mover.play()

    

//     //making another button
//     const mutebutton = document.getElementById (`horseButton`)
//     // subbutton.style.textColor "black"
//     // subbutton.style.textSize '100px'
//     mutebutton.style.width  = `50px`
//     mutebutton.style.height = `50px`
//     // subbutton.style.backgroundColor = `gold`
//     const butrans_x = `translateX(${subs.width /2 - -550}px)`
//     const butrans_y = `translateY(${subs.height/2 - 500}px)`
//     mutebutton.style.transform = `${butrans_x} ${butrans_y}`
//     subs.append (mutebutton)

//     const eTitle = document.getElementById('ecommerceTitle')
//     eTitle.style.width = '600px'
//     eTitle.style.height = '550px'
//     const etrans_x = `translateX(${subs.width /2 - 500}px)`
//     const etrans_y = `translateY(${subs.height/2 - 500}px)`
//     eTitle.style.transform = `${etrans_x} ${etrans_y}`
//     subs.append (eTitle)

//     // mutebutton.onclick = () => mutebutton_mover.play()
//     //var audio = new Audio('25th_hour.wav');
//     audio.play();
//     audio.loop = true;
 
// </script>

// </body>
// </html>






















