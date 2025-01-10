export interface User {
    name: string;
    age: number;
}

export interface Filter {
    name?: string;
    age?: number;
}

export class ObjectFilter {
    private users: User[] = [];

    constructor(users: User[]) {
        this.users = users;
    }

    public filter(filter: Filter): User[] {
        let filterQuery = 'Filter: WHERE';
        if (filter.name) {
            filterQuery += ` "name" = "${filter.name}"`;
        }
        if (filter.age) {
            if (filter.name) {
                filterQuery += ' AND';
            }
            filterQuery += ` "age" = ${filter.age}`;
        }
        console.log(filterQuery);

        return this.users.filter((user) => {
            let result = true;
            if (filter.name) {
                result = result && user.name === filter.name;
            }
            if (filter.age) {
                result = result && user.age === filter.age;
            }
            return result;
        });
    }
}