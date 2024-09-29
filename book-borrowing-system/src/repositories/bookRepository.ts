import { books } from '../data/mockData';

export const findAvailableBookByCode = (code: string) => {
    return books.find(book => book.code === code && book.stock > 0);
};
