import express from 'express';
import project from '../../package.json';
import { responseClient } from '../utils/http';

const { version } = project;
const router = express.Router();

router.get('/version', (req, res) => {
  responseClient(res, { data: version });
});

export default router;
