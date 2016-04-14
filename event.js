var casper = require('casper').create();

// listening to a custom event
casper.on('google.loaded', function() {
    this.echo('Google page title is ' + this.getTitle());
});

casper.start('http://google.com/', function() {
    // emitting a custom event
    this.emit('google.loaded');
});

casper.run();