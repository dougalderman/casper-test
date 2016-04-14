var Casper = require('casper').Casper;
var utils = require('utils');
var links = {
    'http://edition.cnn.com/': 0,
    'http://www.nytimes.com/': 0,
    'http://www.bbc.co.uk/': 0,
    'http://www.guardian.co.uk/': 0
};

function CountLinks() {
    CountLinks.super_.apply(this, arguments);
}

// Let's make our CountLinks class extending the Casper one
// please note that at this point, CHILD CLASS PROTOTYPE WILL BE OVERRIDEN
utils.inherits(CountLinks, Casper);

CountLinks.prototype.countL = function() {
    return this.evaluate(function() {
        return __utils__.findAll('a[href]').length;
    });
};

CountLinks.prototype.renderJSON = function(what) {
    return this.echo(JSON.stringify(what, null, '  '));
};

var count_links = new CountLinks();

count_links.start();

Object.keys(links).forEach(function(url) {
    count_links.thenOpen(url, function() {
        links[url] = this.countL();
    });
});

count_links.run(function() {
    this.renderJSON(links).exit();
});