//Q. No.45: Answer
function createCar(manufacturer, modelName, ...options) {
    const car = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
    
    for (const option of options) {
      const [key, value] = Object.entries(option)[0];
      car[key] = value;
    }
    
    return car;
  }
  
  const myCar = createCar("Toyota", "Corolla", {color: "blue"}, {sunroof: true});
  console.log(myCar);
  