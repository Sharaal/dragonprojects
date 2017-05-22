require('dotenv-safe').config();

const app = require('express')();
app.disable('x-powered-by');

const vhost = require('vhost');

const maxdomeRssfeeds = require('@dragonprojects/maxdome-rssfeeds');
app.use('/maxdome-rssfeeds', maxdomeRssfeeds);
app.use(vhost('www.maxdome-rssfeeds.de', maxdomeRssfeeds));

const sharaal = require('@dragonprojects/sharaal');
app.use('/sharaal', sharaal);
app.use(vhost('www.sharaal.de', sharaal));

if (module.parent) {
  module.exports = app;
} else {
  app.listen(process.env.PORT);
}
