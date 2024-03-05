
import express from 'express';
import { calculateWinner } from '../controllers/controllers';

export const router = express.Router();

router.post('/calculate-winner', calculateWinner);