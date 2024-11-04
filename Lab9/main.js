/*let star = "*****";
let i = 0;

while (true) {
    console.log(star);
    if (i < 12) {
        star += "*";
    } else {
        star = star.slice(0, -1);
    }
    i++;
    if (i == 24)
        break;
}
*/

//----------------------

// let lastTime = new Date().getTime();
// const endTime = lastTime + 10000; // 10 seconds from the start time
//
// while (true) {
//     const currentTime = new Date().getTime();
//
//     if (currentTime > endTime) {
//         console.log("Час вийшов!");
//         break;
//     }
//
//     if (currentTime - lastTime >= 1000) {
//         console.log(i);
//         i++;
//         lastTime = currentTime;
//     }
// }
//
// //----------------------
//
const car = {
    speedometer: 0
};


Object.defineProperty(car, 'setSpeedometer', {
    value: function(val) {
        this.speedometer = val;
    }
});

Object.defineProperty(car, 'getSpeedometer', {
    value: function() {
        return this.speedometer;
    }
});

Object.defineProperty(car, 'clearSpeedometer', {
    value: function() {
        this.speedometer = 0;
    }
});

car.setSpeedometer(100);
console.log(car.getSpeedometer());
car.clearSpeedometer();
console.log(car.getSpeedometer());
car.setSpeedometer(300);
console.log(car.getSpeedometer());


/*

//----------------------

class Car {
    constructor(brand, model, year, color, speedometer) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speedometer = speedometer;
    }

    setSpeed(speed) {
        this.speedometer = speed;
    }

    getSpeed() {
        return this.speedometer;
    }

    clearSpeed() {
        this.speedometer = 0;
    }
}

const ferrari = new Car("S", "XS", 2007, "Red", 121);
ferrari.clearSpeed();

//----------------------

class Truck {
    constructor(brand, capacity) {
        this.brand = brand;
        this.capacity = capacity;
        this.speedometer = 0;
    }

    setSpeed(speed) {
        this.speedometer = speed;
        console.log(`Швидкість вантажівки ${this.brand} з вантажопідйомністю `)
    }

    getSpeed() {
        return this.speedometer;
    }

    clearSpeed() {
        this.speedometer = 0;
        console.log(`Спідометр вантажівки ${this.brand} очищено.`);
    }
}

const myTruck = new Truck('Volvo', 15);
myTruck.setSpeed(80);
console.log(myTruck.getSpeed());
myTruck.clearSpeed();


//----------------------

class Apple {
    constructor(color, variety, weight) {
        this.color = color;
        this.variety = variety;
        this.weight = weight;
    }

    getInfo() {
        return `Яблуко: сорт ${this.variety}, колір ${this.color}, вага ${this.weight}`;
    }

    changeColor(newColor) {
        this.color = newColor;
        console.log(`Колір яблука змінено на ${this.color}`);
        return this;
    }

    changeWeight(newWeight) {
        this.weight = newWeight;
        console.log(`Вага яблука змінена на ${this.weight}`);
        return this;
    }
}

const myApple = new Apple('червоний', 'Гала', 150);
console.log(myApple.getInfo());
myApple.changeColor('зелене').changeWeight(160);
console.log(myApple.getInfo());

//----------------------

class Animal {
    constructor(name, aggressive) {
        this.name = name;
        this.aggressive = aggressive;
    }

    makeNoise() {
        console.log(`${this.name} make a noise!`);
    }
}

class Dog extends Animal {
    constructor(name, aggressive) {
        super(name, aggressive);
    }

    makeNoise() {
        console.log(`${this.name} make a bark!`);
    }

    eatMeat() {
        console.log(`${this.name} eat meat!`);
    }
}

class Eagle extends Dog {
    constructor(name, aggressive) {
        super(name, aggressive);
    }

    makeNoise() {
        console.log(`${this.name} make a IAAAAAA!`);
    }
}

const dog = new Dog("Sharik", false);
dog.eatMeat();
dog.makeNoise();

const eagle = new Eagle("NeSharik", true);
eagle.eatMeat();
eagle.makeNoise();

//----------------------

Object.prototype.toString = function() {
    return '[object ' + this.constructor.name +