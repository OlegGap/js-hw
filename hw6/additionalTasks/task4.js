/*
 * Напиши класс Car с указанными свойствами и методами
 */

class Car {
    constructor({ maxSpeed = 0 }) {
      this.speed = 0;
      this.maxSpeed = maxSpeed;
      this.running = false;
      this.distance = 0;
    }
    static getSpecs(obj) {
      console.log(
        `maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running}, distance: ${obj.distance}`
      );
    }
    turnOn() {
      this.running = true;
    }
  
    turnOff() {
      this.running = false;
    }
  
    accelerate(spd) {
      if (this.maxSpeed > spd) {
        this.speed = spd;
      }
    }
  
    decelerate(spd) {
      if (this.maxSpeed > spd && 0 < spd) {
        this.speed = spd;
      }
    }
  
    drive(hours) {
      if (this.running) {
        this.distance = this.speed * hours;
      }
    }
  }
  
  const car = new Car({ maxSpeed: 100 });
  
  car.turnOn();
  car.accelerate(50);
  car.drive(2);
  
  Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
  