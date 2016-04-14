var casper = require('casper').create();

casper.start('./sample.html', function() {
    if (this.exists('h1.page-title')) {
        this.echo('the heading exists');
    }
    if (this.exists('li.first')) {
        this.echo('first class exists');
    }
    if (this.exists('li.second')) {
        this.echo('second class exists');
    }
    else {
        this.echo('second class doesn\'t exist'); 
    }
});

casper.run();