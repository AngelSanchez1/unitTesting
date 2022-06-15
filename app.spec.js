const it = require('./framework').it;
const expect = require('./framework').expect;
const saludar = require('./app');

console.log(saludar('Angel'));


it('La función saluda',()=>{
    expect(saludar('Angel')).toBe('Hola Angel');
});

