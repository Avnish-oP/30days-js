let myname = 'avnish   ';

String.prototype.trueLength = function(){
    let trueLength = 0;
    for(let i = 0; i<this.length; i++){
        this[i]===" "? "":trueLength++
    }
    return trueLength
}

console.log(myname.trueLength());