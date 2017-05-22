require('dotenv-safe').config();

const app = require('express')();
app.disable('x-powered-by');

app.use('/maxdome-rssfeeds', require('@dragonprojects/maxdome-rssfeeds'));

const sharaal = require('@dragonprojects/sharaal');
app.use('/sharaal', sharaal);
app.use(require('vhost')('www.sharaal.de', sharaal));

if (module.parent) {
  module.exports = app;
} else {
  app.listen(process.env.PORT);
}
