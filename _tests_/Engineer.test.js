const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe('Initialization', () => {

        it('should create new object Engineer with name, id, email and github properties', () => {
            const name = 'Greg';
            const id = 1;
            const email = 'griveroll86@gmail.com';
            const github = 'griveroll86';
            const obj = new Engineer(name, id, email, github);
    
            expect(obj.name).toEqual('Greg');
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(1);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual('griveroll86@gmail.com');
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual('griveroll86');
            expect(obj.github).toEqual(github);
        });

    })

    describe('Methods', () => {

        it('should return Engineer role using getRole method', () => {
            const obj = new Engineer();

            expect(obj.getRole()).toEqual('Engineer');
        })

        it('should return github username using getGithub method', () => {
            const obj = new Engineer('Greg', 1, 'griveroll86@gmail.com', 'griveroll86');

            expect(obj.getGithub()).toEqual('griveroll86');
            expect(obj.getGithub()).toEqual(obj.github);
        })

    })

})