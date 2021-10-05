const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe('Initialization', () => {

        it('should create new object Intern with name, id, email and school properties', () => {
            const name = 'Greg';
            const id = 1;
            const email = 'griveroll86@gmail.com';
            const school = 'Ohio State University';
            const obj = new Intern(name, id, email, school);
    
            expect(obj.name).toEqual('Greg');
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(1);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual('griveroll86@gmail.com');
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual('Ohio State University');
            expect(obj.school).toEqual(school);
        });

    })

    describe('Methods', () => {

        it('should return Intern role using getRole method', () => {
            const obj = new Intern();

            expect(obj.getRole()).toEqual('Intern');
        })

        it('should return school using getSchool method', () => {
            const obj = new Intern('Greg', 1, 'griveroll86@gmail.com', 'Ohio State University');

            expect(obj.getSchool()).toEqual('Ohio State University');
            expect(obj.getSchool()).toEqual(obj.school);
        })

    })


})