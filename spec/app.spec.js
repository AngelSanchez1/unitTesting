const saludar = require('../app');

it('La función saluda',()=>{
    expect(saludar('Angel')).toBe('Hola Angel');
});

