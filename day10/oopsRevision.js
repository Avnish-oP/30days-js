//why we need constructor functon
//constructor function is used to create multiple objects with same properties
//constructor create multiple instances of same object if we use new keyword if we don't use use constructor previous object will get overwrited by new object

let user = function(username, email, isAdmin){
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
    return this;
}

const userOne = new user("Avnish",  "one@gmail.com", true);
const userTwo = new user("ankit", "ankit@gmail.com", false)
console.log(userOne instanceof user);
user.prototype.login = function(){
    return console.log(`${this.username} has logged in`);
}
user.prototype.getEmail = function(){
    return console.log(`${this.username} has ${this.email} email id`)
}
console.log(userOne.login());
console.log(userTwo.getEmail());