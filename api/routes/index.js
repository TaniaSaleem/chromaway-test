
const express = require('express');
const router = express.Router();
const Controller = require('../controllers/index');
router.get(
    '/',
    (_req, _res, _next) => {
      return Controller.index(_req, _res).catch(_next);
    },
  );
router.get(
    '/api/data',
    (_req, _res, _next) => {
      return Controller.data(_req, _res).catch(_next);
    },
  );

  module.exports = express.Router().use('/', router);