import { Request, Response } from 'express';
import { borrowBook } from '../application/borrowBook';

export const borrowBookHandler = async (req: Request, res: Response) => {
    const { memberCode, bookCode } = req.body;
    try {
        const result = await borrowBook(memberCode, bookCode);
        res.status(200).json(result);
    } catch (error: unknown) {  // Menambahkan tipe unknown di sini
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
