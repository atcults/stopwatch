import { StopWatch } from '../index';

test("Stopwatch", () => {
    
    var stopwatch = new StopWatch();
    stopwatch.start();
    for (var index = 0; index < 100; index++) {
        stopwatch.printElapsed('Instance[' + index + ']');
    }
    stopwatch.stop();
    stopwatch.printElapsed();

    expect("hello").toBe("hello");
});

