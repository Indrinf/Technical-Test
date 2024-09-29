import { members } from '../data/mockData';

export const findMemberById = (code: string) => {
    return members.find(member => member.code === code);
};
