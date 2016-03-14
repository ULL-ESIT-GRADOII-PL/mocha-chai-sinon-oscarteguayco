var expect = chai.expect;

describe("Medida", function() {
  describe("constructor", function() {
    it("should have a value", function() {
      var med = new Medida(0.56, "c");
      expect(med.getValor()).to.equal(0.56);
    });
    it("should have a type", function() {
      var med = new Medida(0.56, "c");
      expect(med.getTipo()).to.equal("c");
    });
  });
  describe("#convertir", function() {
    it("should convert a temperature correctly", function() {
      var value = Medida.convertir("32f to c");
      expect(value).to.equal("0.00 Celsius");
    });
  });
});


describe("Temperatura", function() {
  describe("constructor", function() {
    it("should have a value", function() {
      var temp = new Temperatura(32, "f");
      expect(temp.getValor()).to.equal(32);
    });
    it("should have a type", function() {
      var temp = new Temperatura(32, "f");
      expect(temp.getTipo()).to.equal("f");
    });
  });
});

describe("Fahrenheit", function(){
  describe("constructor", function(){
    it("should have a value", function() {
      var fah = new Fahrenheit(32);
      expect(fah.getValor()).to.equal(32);
    });
    it("should have a type", function() {
      var fah = new Fahrenheit(32);
      expect(fah.getTipo()).to.equal("f");  
    });
    it("should have a name", function() {
      var fah = new Fahrenheit(32);
      expect(fah.name).to.equal("Fahrenheit");  
    });
  });
  describe("#toCelsius", function() {
    it("should convert Fahrenheit to Celsius", function(){
      var value = new Fahrenheit(32).toCelsius();
      expect(value).to.equal(0);
    });  
  });
  describe("#toKelvin", function() {
    it("should convert Fahrenheit to Kelvin", function(){
      var value = new Fahrenheit(32).toKelvin();
      expect(value).to.equal(273.15);
    });  
  });
});
