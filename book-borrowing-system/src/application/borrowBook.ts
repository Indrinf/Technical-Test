import { findMemberById } from '../repositories/memberRepository';
import { findAvailableBookByCode } from '../repositories/bookRepository';

export const borrowBook = async (memberCode: string, bookCode: string) => {
    const member = findMemberById(memberCode);
    if (!member) throw new Error('Member not found');

    const book = findAvailableBookByCode(bookCode);
    if (!book) throw new Error('Book is unavailable or already borrowed');

    // Logika tambahan untuk menambah buku yang dipinjam oleh anggota
    return { member, book };
};
