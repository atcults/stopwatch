# @atlib/stopwatch

A simple and efficient stopwatch utility for Node.js applications. It provides high-precision timing using `process.hrtime()`.

## Installation

Install the package using npm:
```bash
npm install @atlib/stopwatch
```

## Usage

```javascript
var stopwatch = new StopWatch();
stopwatch.start();

for (var index = 0; index < 100; index++) {
  stopwatch.printElapsed('Instance[' + index + ']');
}

stopwatch.stop();

stopwatch.printElapsed();
```

The `printElapsed()` method outputs the time in nanoseconds. You can also provide an optional custom label to `printElapsed()`:

```javascript
const { StopWatch } = require('@atlib/stopwatch'); // Or import { StopWatch } from '@atlib/stopwatch';

const timer = new StopWatch();

timer.start();
// Perform some operations
timer.stop();
timer.printElapsed('My Operation'); // Prints "My Operation: XXXXXX nanoseconds"

timer.start();
// Perform other operations
timer.stop();
timer.printElapsed(); // Prints "Elapsed: YYYYYY nanoseconds"
```

## API Documentation

### `StopWatch` Class

The main class for measuring time.

**`constructor()`**

*   Description: Creates a new `StopWatch` instance.
*   Usage:
    ```javascript
    const stopwatch = new StopWatch();
    ```

**Methods**

*   **`start()`**
    *   Description: Starts the stopwatch. It records the current high-resolution time.
    *   Usage:
        ```javascript
        stopwatch.start();
        ```

*   **`stop()`**
    *   Description: Stops the stopwatch. It calculates the time elapsed since `start()` was called.
    *   Usage:
        ```javascript
        stopwatch.stop();
        ```

*   **`printElapsed(name?: string)`**
    *   Description: Prints the elapsed time to the console. The time is displayed in nanoseconds.
    *   Parameters:
        *   `name` (optional, string): A custom label to prefix the output. If not provided, "Elapsed:" is used.
    *   Usage:
        ```javascript
        stopwatch.printElapsed('Custom Task'); // Output: Custom Task: XXXXXX nanoseconds
        stopwatch.printElapsed();             // Output: Elapsed: YYYYYY nanoseconds
        ```

## Building from Source

This project is written in TypeScript and needs to be compiled to JavaScript.

To build the project, clone the repository and run the build command:

```bash
git clone https://github.com/sanelib/stopwatch.git
cd stopwatch
npm install
npm run build
```

This will compile the TypeScript files from `src/` into the `dist/` directory, as configured in `package.json` and `tsconfig.json`.

## Running Tests

This project uses Jest for testing.

To run the tests, use the following npm script:

```bash
npm test
```

This command will execute the test files located in the `__tests__` directory.

## Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

*   [Open an issue](https://github.com/sanelib/stopwatch/issues)
*   [Submit a pull request](https://github.com/sanelib/stopwatch/pulls)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
