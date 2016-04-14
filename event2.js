var casper = require('casper').create();

// listener function for requested resources
var listener = function(resource, request) {
    this.echo(resource.url);
};

// listening to all resources requests
casper.on("resource.requested", listener);

// load the google homepage
casper.start('http://google.com/', function() {
    this.echo(this.getTitle());
});

casper.run().then(function() {
    // remove the event listener
    this.removeListener("resource.requested", listener);
});