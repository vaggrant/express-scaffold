import express from 'express';
import { version } from '../config';
import { responseClient } from '../utils/http';

const router = express.Router();

router.get('/version', (req, res) => {
  responseClient(res, { data: version });
});

export default router;
