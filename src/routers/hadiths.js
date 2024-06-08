import express from 'express';
import { getHadith } from '../controllers/hadith.js';

const router = express.Router();

router.get('/', getHadith)

export default router;