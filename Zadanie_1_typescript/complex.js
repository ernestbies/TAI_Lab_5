var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log('Real part: ', this.real, 'Imaginary part: ', this.imaginary);
    };
    return Complex;
}());
// Stworzenie dwóch obiektów klasy Complex
var a = new Complex(1, 2);
var b = new Complex(3, 4);
// Wyświetlenie utworzonych obiektów
console.log(a);
console.log(b);
// Dodanie dwóch obiektów
console.log('Wynik dodawania dwóch obiektów: ');
var c = a.add(b);
// Wyświetlenie wyniku dodawania dwóch obiektów
c.toString();
// Odejmowanie dwóch obiektów
console.log('Wynik odejmowania dwóch obiektów: ');
var d = c.sub(a);
// Wyświetlenie wyniku odejmowania dwóch obiektów
d.toString();
// Obliczenie modułu z wcześniej otrzymanego wyniku
var e = d.mod();
// Wyświetlenie otrzymanego modułu
console.log('Modul z wczesniej otrzymanego wyniku wynosi: ', e);
