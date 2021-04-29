# toneProjFr

# lets build a practice piano with a backing beat!
first you must build a piano. In order to do this you must look in your HTML.
a great tutorial (which I am emulating here) can be found at: https://dev.to/shimphillip/building-a-piano-with-tone-js-5c2f
otherwise the rest of my knowledge came from the tone.js website: https://tonejs.github.io/

# html
When inside the HTML, make an UL containing 7 li's. These will represent the white keys on your piano.
Nested inside the white key <li>s are <divs> which represent the black keys.
Give the <divs> and <li>s classes depening on whether they are white keys or black keys, so you can manipulate them in css.
ex: 
<li data-note="C4" class="key">
    <div data-note="C#4" class="black-key">R</div>
    D
</li>

# css
after you have made the correct amount of white/black keys for your keyboard it is time to style them.
we will use flexboxes to order the keys, center them, and make them look like a piano
an in depth css explination (with examples) can be found here: https://dev.to/shimphillip/building-a-piano-with-tone-js-5c2f

#js
in your main js file (if copied from my github src->index.js) you must IMPORT the tone.js
that looks a little something like this:
import * as Tone from 'tone';

but before we can use this awesome JS library we must play with the piano we created! lets grab our piano into a variable. 
const piano = document.getElementById("piano");

we need this piano to respond to our mouse, so adding an eventListener is the way to do that. This fires off a note continously until trigger is released
piano.addEventListener("mousedown", e =>{
  synth.triggerAttack(e.target.dataset.note);
});

This code stops the trigger:
piano.addEventListener("mouseup", e =>{
  synth.triggerRelease();
});

We also need our keyboard to respond to the keys we press on the keyboard! That also is done through an eventListener on "keydown"
document.addEventListener("keydown", e =>{
  switch (e.key) {
    case "d":
    return synth.triggerAttack("C4");
    case "r":
    return synth.triggerAttack("C#4");
    case "f":
    return synth.triggerAttack("D4");
    case "t":
    return synth.triggerAttack("D#4");
    case "g":
    return synth.triggerAttack("E4");
    case "h":
    return synth.triggerAttack("F4");
    case "u":
    return synth.triggerAttack("F#4");
    case "j":
    return synth.triggerAttack("G4");
    case "i":
    return synth.triggerAttack("G#4");
    case "k":
    return synth.triggerAttack("A4");
    case "o":
    return synth.triggerAttack("A#4");
    case "l":
    return synth.triggerAttack("B4");
    default:
    return;
  }
});

And to be thourough we must add a way for the synth to be released
document.addEventListener("keyup", e =>{
  switch(e.key){
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
    synth.triggerRelease();
  }
});

now, after all them schenannigans lets make a basic sythesizer with tone.js
we need to create a variable to store the synth in. using "new Tone.Sythn();" we can store a synth in a variable. it looks like this:
const synth = new Tone.Synth();

To make a backbeat to play along to, we must grab an instrument from the API of tone.js again, and create a variable to hold the instrument.
const kick = new Tone.MembraneSynth().toDestination();
const clap = new Tone.MembraneSynth().toDestination();
const hat = new Tone.MembraneSynth().toDestination();

This plays the kick every quarter-note:
const loopA = new Tone.Loop(time => {
	kick.triggerAttackRelease("C1", "8n", time);
}, "4n").start(0);

This plays the clap every half note:
const loopB = new Tone.Loop(time => {
	clap.triggerAttackRelease("C3", "8n", time);
}, "2n").start("2n");

This plays the hat every off quarter-note, by starting it on an 8th note.
const loopC = new Tone.Loop(time => {
	hat.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");


This code makes the loops start when the Transport is started
Tone.Transport.start()

