//test

import { Filter, ObjectFilter, User } from "./object-filter";


describe('ObjectFilter', () => {
    let objectFilter: ObjectFilter;
    let users: User[];

    beforeEach(() => {
        users = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 },
        ];
        objectFilter = new ObjectFilter(users);
    });

    it('should filter users by name', () => {
        const filter: Filter = { name: 'John' };
        const result = objectFilter.filter(filter);
        expect(result).toEqual([users[0], users[2]]);
    });

    it('should filter users by age', () => {
        const filter: Filter = { age: 25 };
        const result = objectFilter.filter(filter);
        expect(result).toEqual([users[0], users[3]]);
    });

    it('should filter users by name and age', () => {
        const filter: Filter = { name: 'John', age: 25 };
        const result = objectFilter.filter(filter);
        expect(result).toEqual([users[0]]);
    });
});