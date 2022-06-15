const saludar = require("../app");

var x = false;
var a = {};
var b = {};

describe("Verificar que la variable es true", () => {
  it("La función saluda", () => {
    expect(saludar("Angel")).toContain("Hola Angel");
  });

  it('X es true', ()=>{
    expect(x).toBe(false);
    expect(x).toEqual(false);
  } );

  it('objetos iguales', ()=>{
    expect(a).toEqual(b);
  })

});
