const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[],
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(appetizers){
      this._courses.appetizers = appetizers;
    },
    set mains(mains){
      this._courses.mains = mains;
    },
    set desserts (desserts){
      this._courses.desserts  = desserts;
    },
  
    get courses(){ 
      return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
      };
    },
  
    addDishToCourse(courseName,dishName,dishPrice){
       const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer =  this.getRandomDishFromCourse('appetizers');
     const main =  this.getRandomDishFromCourse('mains');
     const dessert =  this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizer.price + main.price + dessert.price;
  
     return `Your meal is ${appetizer.name}, ${main.name},${dessert.name}. The price is $${totalPrice}. `;
     }
  };
  
  menu.addDishToCourse('appetizers','Jalenpino poppers',8);
  menu.addDishToCourse('mains','Lamb chops',28);
  menu.addDishToCourse('desserts','Almond Jello',10);
  menu.addDishToCourse('appetizers','Appleseed Salad',9);
  menu.addDishToCourse('mains','Lobster Rolls',25);
  menu.addDishToCourse('desserts','Passion Fruit Gelato',12);
  menu.addDishToCourse('appetizers','Oysters',9);
  menu.addDishToCourse('mains','Steak',34);
  menu.addDishToCourse('desserts','Chocolate cake',10);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  