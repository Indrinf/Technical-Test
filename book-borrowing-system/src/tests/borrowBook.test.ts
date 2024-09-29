import { borrowBook } from '../application/borrowBook';
import { findMemberById } from '../repositories/memberRepository';
import { findAvailableBookByCode } from '../repositories/bookRepository';

jest.mock('../repositories/memberRepository');
jest.mock('../repositories/bookRepository');

describe('Borrow Book Use Case', () => {
    it('should throw error if member does not exist', async () => {
        (findMemberById as jest.Mock).mockReturnValue(null);
        await expect(borrowBook('M999', 'JK-45')).rejects.toThrow('Member not found');
    });

    it('should throw error if book is unavailable', async () => {
        (findMemberById as jest.Mock).mockReturnValue({ code: 'M001' });
        (findAvailableBookByCode as jest.Mock).mockReturnValue(null);
        await expect(borrowBook('M001', 'JK-45')).rejects.toThrow('Book is unavailable or already borrowed');
    });

    it('should allow member to borrow book if conditions are met', async () => {
        (findMemberById as jest.Mock).mockReturnValue({ code: 'M001' });
        (findAvailableBookByCode as jest.Mock).mockReturnValue({ code: 'JK-45', stock: 1 });

        const result = await borrowBook('M001', 'JK-45');
        expect(result).toHaveProperty('member');
        expect(result).toHaveProperty('book');
    });
});

