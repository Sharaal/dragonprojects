require('dotenv-safe').config();

const app = require('express')();
app.disable('x-powered-by');

const vhost = require('vhost');

const maxdomeRSSFeeds = require('@dragonprojects/maxdome-rssfeeds');
app.use('/maxdome-rssfeeds', maxdomeRSSFeeds);
app.use(vhost('maxdome-rssfeeds.herokuapp.com', maxdomeRSSFeeds));

const sharaal = require('@dragonprojects/sharaal');
app.use('/sharaal', sharaal);
app.use(vhost('sharaal.de', sharaal));
app.use(vhost('sharaal.herokuapp.com', sharaal));

if (module.parent) {
  module.exports = app;
} else {
  app.listen(process.env.PORT);
}
