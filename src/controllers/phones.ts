import { Request, Response } from 'express';
import { getAllPhones, getPhoneById } from '../services/phones';
import { SortBy } from '../types/SortBy';

export const getPhones = async (req: Request, res: Response) => {
  const {
    page = 1,
    limit = 16,
    sort = SortBy.Default,
  } = req.query;

  const phones = await getAllPhones(Number(page), Number(limit), sort as SortBy);
    
  res.send(phones);
};

export const getPhoneDetails = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  const phone = await getPhoneById(phoneId);

  res.send(phone);
};