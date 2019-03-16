/*
 * Напиши класс Car с указанными свойствами и методами
 */

class Car {
    constructor({ maxSpeed = 0 }) {
      this.spead = 0;
      this.maxSpeed = maxSpeed;
      this.running = false;
      this.distance = 0;
    }
  
    turnOn() {
      this.running = true;
    }
  
    turnOff() {
      this.running = false;
    }
  
    accelerate(spd) {
      if (this.maxSpeed > spd) {
        this.spead = spd;
      }
    }
  
    decelerate(spd) {
      if (this.maxSpeed > spd && 0 < spd) {
        this.spead = spd;
      }
    }
  
    drive(hours) {
      if (this.running) {
        this.distance = this.spead * hours;
      }
    }
  }
  
  const car = new Car({ maxSpeed: 100 });
  car.turnOn();
  car.decelerate(40);
  car.drive(20);
  console.log(car.spead);
  console.log(car.distance);
  