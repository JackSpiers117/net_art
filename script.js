

// function play_note (note, length) {

//     // if the audio context is not running, resume it
//     if (audio_context.state != 'running') init_audio ()
    
//     // create an oscillator
//     const osc = audio_context.createOscillator ()
    
//     // make it a triangle wave this time
//     osc.type            = 'triangle'
    
//     // set the value using the equation 
//     // for midi note to Hz
//     osc.frequency.value = 440 * 2 ** ((note - 69) / 12)
    
//     // create an amp node
//     const amp = audio_context.createGain ()
    
//     // connect the oscillator 
//     // to the amp
//     // to the audio out
//     osc.connect (amp).connect (audio_context.destination)
    
//     // the .currentTime property of the audio context
//     // contains a time value in seconds
//     const now = audio_context.currentTime
    
//     // make a gain envelope
//     // start at 0
//     amp.gain.setValueAtTime (0, now)
    
//     // take 0.02 seconds to go to 0.4, linearly
//     amp.gain.linearRampToValueAtTime (0.4, now + 0.02)
    
//     // this method does not like going to all the way to 0
//     // so take length seconds to go to 0.0001, exponentially
//     amp.gain.exponentialRampToValueAtTime (0.0001, now + length)
    
//     // start the oscillator now
//     osc.start (now)
    
//     // stop the oscillator 1 second from now
//     osc.stop  (now + length)
//     }







// const myImage = new Image(500,580);
// myImage.src = 'HorseRider1.png';
// const cnv  = document.createElement ('canvas')

// cnv.width  = 1920
// cnv.height = 1080
// document.body.appendChild (cnv)
// const ctx = cnv.getContext (`2d`)
// ctx.fillStyle = `lightgreen`
// ctx.fillRect (0, 0, cnv.width, cnv.height)




