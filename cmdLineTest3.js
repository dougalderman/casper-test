var casper = require("casper").create();
// removing default options passed by the Python executable
casper.cli.drop("cli");
casper.cli.drop("casper-path");

if (casper.cli.args.length === 0 && Object.keys(casper.cli.options).length === 0) {
    casper.echo("No arg nor option passed").exit();
}
else {
    casper.echo("Casper CLI passed args:");
    require("utils").dump(casper.cli.args);

    casper.echo("Casper CLI passed options:");
    require("utils").dump(casper.cli.options);
}
casper.exit();