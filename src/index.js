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

const synth = new Tone.Synth().toDestination();
const now = Tone.now()
synth.triggerAttackRelease("C3", "4n", now)
synth.triggerAttackRelease("E3", "8n", now + 0.5)
synth.triggerAttackRelease("G3", "4n", now + 1)
synth.triggerAttackRelease("B3", "8n", now + 1.5)

synth.triggerAttackRelease("G3", "4n", now + 3.5)
synth.triggerAttackRelease("E3", "8n", now + 4)
synth.triggerAttackRelease("C3", "4n", now + 4.5)
synth.triggerAttackRelease("B2", "8n", now + 5)

synth.triggerAttackRelease("C3", "4n", now + 6.5)
synth.triggerAttackRelease("E3", "8n", now + 7)
  synth.triggerAttackRelease("G3", "4n", now + 7.5)
synth.triggerAttackRelease("B3", "8n", now + 8)
synth.triggerAttackRelease("B3", "8n", now + 8.25)
  synth.triggerAttackRelease("G3", "4n", now + 8.75)
synth.triggerAttackRelease("B3", "8n", now + 9)
synth.triggerAttackRelease("B3", "8n", now + 9.25)
  synth.triggerAttackRelease("G3", "4n", now + 9.75)
synth.triggerAttackRelease("B3", "8n", now + 10)
synth.triggerAttackRelease("B3", "8n", now + 10.25)
synth.triggerAttackRelease("E3", "8n", now + 10.75)
synth.triggerAttackRelease("G3", "8n", now + 11.25)
synth.triggerAttackRelease("E3", "8n", now + 11.75)
synth.triggerAttackRelease("G3", "8n", now + 12.25)
synth.triggerAttackRelease("D3", "8n", now + 13)

// const pingPong = new Tone.PingPongDelay("8n", 0.4).toDestination();
// const now = Tone.now()
// const synth = new Tone.Synth().connect(pingPong);
// synth.triggerAttackRelease("C3", "4n", now)
// synth.triggerAttackRelease("F4", "8n", now + 0.5)
// synth.triggerAttackRelease("G4", "4n", now + 1)
// synth.triggerAttackRelease("B4", "8n", now + 1.5)
