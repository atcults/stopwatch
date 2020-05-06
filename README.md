# stopwatch

## Publishing package to npm

NPM_EMAIL: sunnyrajwadi@gmail.com

NPM_TOKEN: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

[https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow]

[https://docs.npmjs.com/creating-and-publishing-an-org-scoped-package]

>npm login
>npm init --scope=<your_org_name>
>npm publish --access public

```js

var stopwatch = new StopWatch();
stopwatch.start();

for (var index = 0; index < 100; index++) {
  stopwatch.printElapsed('Instance[' + index + ']');
}

stopwatch.stop();

stopwatch.printElapsed();

```

