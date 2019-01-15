function Person(name, favColor){
    this.name = name;
    this.favColor = favColor;
    this.greet = function(){
        console.log("He there! my name is " +this.name+ " and my fav color is " + this.favColor+ ".");
    }
}

module.exports = Person;