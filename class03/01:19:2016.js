//quiz
var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

function myFunction(arr) {
    var length = arr.length
    for (var i =0; i < length; i++) {
        console.log(arr[i]);
    }
    
}

myFunction(day);

//object syntax
var person = {
    first: "Matt",
    last: "Plaus",
    family: [ "Niki, David, Don, Jenny"],
    sayName: function () {
        console.log(this.first + " " + this.last);
  }
};

for(var i in person.family) {
  console.log(person.family[i]);
}

for(var key in person) {
  console.log(person[key]);
}

//JQuery
$(document).ready(function() {
  
  
  
});
   