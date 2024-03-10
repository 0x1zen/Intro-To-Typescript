"use strict";
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUsers([{
        firstName: "raj",
        lastName: "dubal",
        age: 21
    }, {
        firstName: "atul",
        lastName: "patil",
        age: 16
    },]));
