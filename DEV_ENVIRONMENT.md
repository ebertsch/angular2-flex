# Developer guide: getting your environment set up

1. Make sure you have `node` installed with a version at _least_ 5.5.0.
2. Run `npm install -g gulp` to install gulp.
3. Fork the `angular2-fire` repo. 
4. Clone your fork. 
   Recommendation: name your git remotes `upstream` for `angular2-fire`
   and `<your-username>` for your fork.
5. From the root of the project, run `npm install`.


To build the components in dev mode, run `gulp build:components`.
To build the components in release mode, run `gulp build:release`
 
To bring up a local server, run `gulp serve:devapp`. This will automatically watch for changes 
and rebuild. The browser should refresh automatically when changes are made.

### Running tests

To run unit tests, run `gulp test`.
To run the e2e tests, run `gulp e2e`.
To run lint, run `gulp lint`.
