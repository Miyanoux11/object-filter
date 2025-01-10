import * as fs from 'fs';
import { Filter, ObjectFilter, User } from '../object-filter1/object-filter';

describe('ObjectFilter with JSON file', () => {
    let objectFilter: ObjectFilter;
    let users: User[];

    beforeEach(() => {
        const data = fs.readFileSync('./src/object-filters/users.json', 'utf8');
        users = JSON.parse(data);
        objectFilter = new ObjectFilter(users);
    });

    it('should filter users by name from JSON file', () => {
        const filter: Filter = { name: 'John' };
        const result = objectFilter.filter(filter);
        expect(result).toEqual(users.filter(user => user.name === 'John'));
    });

    it('should filter users by age from JSON file', () => {
        const filter: Filter = { age: 25 };
        const result = objectFilter.filter(filter);
        expect(result).toEqual(users.filter(user => user.age === 25));
    });

    it('should filter users by name and age from JSON file', () => {
        const filter: Filter = { name: 'John', age: 25 };
        const result = objectFilter.filter(filter);
        expect(result).toEqual(users.filter(user => user.name === 'John' && user.age === 25));
    });
});