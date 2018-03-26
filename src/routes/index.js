import express from 'express';
import project from '../../package.json';
import http from '../utils/http';

const { version } = project;
const router = express.Router();

router.get('/version', (req, res) => {
  http.responseClient(res, { data: version });
});

module.exports = router;
