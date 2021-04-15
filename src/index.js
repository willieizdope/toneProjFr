import * as Tone from 'tone';

//create a synth and connect it to the main output (your speakers)
//const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
//synth.triggerAttackRelease("C4", "8n");

//const synth = new Tone.Synth().toDestination();
//const now = Tone.now()
// trigger the attack immediately
//synth.triggerAttack("C4", now)
// wait one second before triggering the release
//synth.triggerRelease(now + 1)

// const synth = new Tone.Synth().toDestination();
// const now = Tone.now()
// synth.triggerAttackRelease("A3", "4n", now)
// synth.triggerAttackRelease("C#4", "8n", now + 0.5)
// synth.triggerAttackRelease("E4", "4n", now + 1)
// synth.triggerAttackRelease("G#4", "8n", now + 1.5)

const pingPong = new Tone.PingPongDelay("8n", 0.2).toDestination();
const now = Tone.now()
const synth = new Tone.Synth().connect(pingPong);
synth.triggerAttackRelease("A3", "4n", now)
synth.triggerAttackRelease("C#4", "8n", now + 0.5)
synth.triggerAttackRelease("E4", "4n", now + 1)
synth.triggerAttackRelease("G#4", "8n", now + 1.5)