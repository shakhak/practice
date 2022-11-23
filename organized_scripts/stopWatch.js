function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running)
            throw new Error('Stopwatch is already running');

        running = true;
        startTime = new Date();


    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not running');

        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime());  //gets milliseconds
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}
let watch = new Stopwatch;

watch.start();
//console.log(watch.start(), 'start');
//console.log(watch.stop(), 'stop');
console.log(watch.stop(), 'stop');
console.log(watch.duration, 'duration');
console.log(watch.reset(), 'reset');
console.log(watch.duration, 'duration');