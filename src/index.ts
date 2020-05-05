class StopWatch {
    startTime: number;
    stopTime: number;
    running: boolean;
    performance: boolean;

    constructor(performance?: boolean) {
        this.startTime = 0;
        this.stopTime = 0;
        this.running = false;
        this.performance = performance === false ? false : !!window.performance;
    }

    currentTime() {
        return this.performance ? window.performance.now() : new Date().getTime();
    }

    start() {
        this.startTime = this.currentTime();
        this.running = true;
    }

    stop() {
        this.stopTime = this.currentTime();
        this.running = false;
    }

    getElapsedMilliseconds() {
        if (this.running) {
            this.stopTime = this.currentTime();
        }
        return this.stopTime - this.startTime;
    }

    getElapsedSeconds() {
        return this.getElapsedMilliseconds() / 1000;
    }

    printElapsed(name?: string) {
        var currentName = name || 'Elapsed:';
        console.log(currentName, '[' + this.getElapsedMilliseconds() + 'ms]', '[' + this.getElapsedSeconds() + 's]');
    }
}

export {StopWatch}


/*
var stopwatch = new StopWatch();
stopwatch.start();

for (var index = 0; index < 100; index++) {
  stopwatch.printElapsed('Instance[' + index + ']');
}

stopwatch.stop();

stopwatch.printElapsed();

*/