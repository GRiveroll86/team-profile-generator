const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe('Initialization', () => {

        it('should create new object Employee with name, id and email properties', () => {
            const name = 'Greg';
            const id = 1;
            const email = 'griveroll86@gmail.com';
            const obj = new Employee(name, id, email);
    
            expect(obj.name).toEqual('Greg');
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(1);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual('griveroll86@gmail.com');
            expect(obj.email).toEqual(email);
        });

    })

    describe('Methods', () => {

        it('should return name using getName method', () => {
            const obj = new Employee('Greg', 1, 'griveroll86@gmail.com');

            expect(obj.getName()).toEqual('Greg');
            expect(obj.getName()).toEqual(obj.name);
        })

        it('should return id using getId method', () => {
            const obj = new Employee('Greg', 1, 'griveroll86@gmail.com');

            expect(obj.getId()).toEqual(1);
            expect(obj.getId()).toEqual(obj.id);
        })

        it('should return email using getEmail method', () => {
            const obj = new Employee('Greg', 1, 'griveroll86@gmail.com');

            expect(obj.getEmail()).toEqual('griveroll86@gmail.com');
            expect(obj.getEmail()).toEqual(obj.email);
        })

    })

})