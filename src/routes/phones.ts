import express from 'express';
import { getPhoneDetails, getPhones } from '../controllers/phones';

export const router = express.Router();

router.get('/', getPhones);
router.get('/:phoneId', getPhoneDetails);