var _ = require('underscore');
var casper = require('casper').create();
var urls = _.uniq([
  'http://google.com/',
  'http://docs.casperjs.org/',
  'http://google.com/'
]);

casper.start().eachThen(urls, function(response) {
  this.thenOpen(response.data, function(response) {
    this.echo(this.getTitle());
  });
});

casper.run();