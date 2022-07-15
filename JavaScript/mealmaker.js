const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
      if (typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if (typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial(){
      if (this._meal && this._price){
        return `Today's special is ${this._meal} for £${this._price}!`
      } else {
        return "Meal or price was not set correctly"
      }
    }
  };
  // this is here to check the functionality of our type check, notice that it doesn't assign the value to the overwrite.
  menu.meal = 'Pizza';
  menu.price = 9;
  console.log(menu.todaysSpecial);