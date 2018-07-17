class FruitTree {
	constructor (name, age, height, matureAge, healthStatus) {
    	this._name = name;
    	this._age = age;
    	this._height = height;
    	this._matureAge = matureAge;
    	this._healthStatus = healthStatus;
		this._die = 20; 
	}

  	get name () {
    	return this._name
  	}

  	get age () {
    	return this._age;
  	}

  	get height () {
    	return this._height;
  	}

  	get matureAge (){
    	return this._matureAge
  	}

  	get healthStatus () {
    	return this._healthStatus;
  	}

  	grow () {
    	let randomHeight = Number((Math.random()).toFixed(2));
    	let stopGrowing = 15;

    	if (this._height <= stopGrowing){
      		this._height = Number((this._height + randomHeight).toFixed(1));
    	}

    	this._age += 1;
    	if (this._age === this._die) {
      		this._healthStatus = false;
    	}
  	}
}

module.exports = FruitTree