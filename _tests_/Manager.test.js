const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('Initialization', () => {

        it('should create new object Manager with name, id, email and officeNumber properties', () => {
            const name = 'Greg';
            const id = 1;
            const email = 'griveroll86@gmail.com';
            const officeNumber = 22;
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.name).toEqual('Greg');
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(1);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual('griveroll86@gmail.com');
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(22);
            expect(obj.officeNumber).toEqual(officeNumber);
        });

    })

    describe('Methods', () => {

        it('should return Manager role using getRole method', () => {
            const obj = new Manager();

            expect(obj.getRole()).toEqual('Manager');
        })

        it('should return officeNumber using getOfficeNumber method', () => {
            const obj = new Manager('Greg', 1, 'griveroll86@gmail.com', 22);

            expect(obj.getOfficeNumber()).toEqual(22);
            expect(obj.getOfficeNumber()).toEqual(obj.officeNumber);
        })

    })

})