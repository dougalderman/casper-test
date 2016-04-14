var casper = require('casper').create();

casper.start('./sample.html', function() {
    if (this.exists('h1.page-title')) {
        this.echo('the heading exists');
    }
});

casper.run();