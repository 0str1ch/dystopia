/* eslint-disable no-undef */
const LRUCache = require('lru-cache');
const wrap = require('await-wrap');

const dev = process.env.NODE_ENV !== 'production';

const ssrCache = new LRUCache({
  length(n, key) {
    return n.toString().length + key.toString().length;
  },
  max: 100 * 1000 * 1000, // 100MB cache soft limit
  maxAge: 1000 * 60 * 24, // 1 day
});

const render = app => async (req, res, pagePath) => {
  // If we have a page in the cache, let's serve it
  if (!dev && ssrCache.has(req.url)) {
    debug(`CACHE HIT: ${req.url}`);

    return res.send(ssrCache.get(req.url));
  }

  const { err, data } = await wrap(app.renderToHTML(req, res, pagePath));

  if (err) return app.renderError(err, req, res, pagePath);

  ssrCache.set(req.url, data);

  return res.send(data);
};

module.exports = render;
