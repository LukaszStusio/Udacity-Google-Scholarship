/*
    Tasks durin countdown:
          Orbiter transfers from ground to internal power (T-50 seconds)
          Ground launch sequencer is go for auto sequence start (T-31 seconds)
          Activate launch pad sound suppression system (T-16 seconds)
          Activate main engine hydrogen burnoff system (T-10 seconds)
          Main engine start (T-6 seconds)
          Solid rocket booster ignition and liftoff! (T-0 seconds)

        If there's a task being completed, it prints out the task
        If there is no task being completed, it prints out the time as T-x seconds

 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var time = 60;
var task;

const t50 = "Orbiter transfers from ground to internal power";
const t31 = "Ground launch sequencer is go for auto sequence start";
const t16 = "Activate launch pad sound suppression system";
const t10 = "Activate main engine hydrogen burnoff system";
const t6 = "Main engine start";
const t0 = "Solid rocket booster ignition and liftoff!";

while(time >= 0) {
  const countdown = "T-" + time + " seconds";


        task = countdown;
    if (time === 50) {
        task = t50;
  } else if (time === 31) {
        task = t31;
  } else if (time === 16) {
        task = t16;
  } else if (time === 10) {
        task = t10;
  } else if (time === 6) {
        task = t6;
  } else if (time === 0) {
        task = t0;
  }

  console.log(task);
  time = time - 1;
}
