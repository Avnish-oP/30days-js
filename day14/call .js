function setUsername(username){
    this.username=username;
    console.log (
        "called"
    )
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.password=password;
    this.email = email
}

const avnish = new createUser("avnish kumar", "kavnish1245@gmail.com", "addf");
console.log(avnish)