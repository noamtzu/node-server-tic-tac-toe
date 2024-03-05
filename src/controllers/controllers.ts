import { Request, Response } from 'express';
import {CalculateWinner} from '../utils/calculation'

export const calculateWinner = (req: Request, res: Response) => {
    const dataArray: Array<string | null> = req.body;
    res.send(CalculateWinner(dataArray));
};