class Complex {
	private real: number;
	private imaginary: number;
	
	constructor(real: number, imaginary: number) {
		this.real = real;
		this.imaginary = imaginary;
	}
	
	add(obj: Complex): Complex {
		return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
	}
	
	sub(obj:Complex): Complex {
		return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
	}
	
	mod(): number {
		return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
	}
	
	toString() {
		console.log('Real part: ', this.real, 'Imaginary part: ', this.imaginary);
	}
}

// Stworzenie dwóch obiektów klasy Complex
let a = new Complex(1,2);
let b = new Complex(3,4);

// Wyświetlenie utworzonych obiektów
console.log(a);
console.log(b);

// Dodanie dwóch obiektów
console.log('Wynik dodawania dwóch obiektów: ');
let c = a.add(b);

// Wyświetlenie wyniku dodawania dwóch obiektów
c.toString();

// Odejmowanie dwóch obiektów
console.log('Wynik odejmowania dwóch obiektów: ');
let d = c.sub(a);

// Wyświetlenie wyniku odejmowania dwóch obiektów
d.toString();

// Obliczenie modułu z wcześniej otrzymanego wyniku
let e = d.mod();

// Wyświetlenie otrzymanego modułu
console.log('Modul z wczesniej otrzymanego wyniku wynosi: ', e);