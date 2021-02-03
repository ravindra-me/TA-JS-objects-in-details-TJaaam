// // using function to create object
// function createObj(name,id,noOfProjects) {
//     let obj = {
//         name : name,
//         id : id,
//         noOfProjects : noOfProjects,
//         getProjects : function () {
//             return this.noOfProjects;
//         },
//         changeName : function (newName) {
            //    let preName = this.name
//             this.name = newName
//             return preName;
//         },
//         incrementProject: function (number = 1) {
//             this.noOfProjects+= number;
//             return this.noOfProjects;
//         },
//         decrementProject: function (number = 1) {
//             this.noOfProjects -= number;
//             return this.noOfProjects;
//         },
//     }
//     return obj;
// }

// Prototypal pattern 

// let createMethod = {
//     getProjects : function () {
//         return this.noOfProjects;
//     },
//     changeName: function (newName) {
//         let preName = this.name
//         this.name = newName
//         return preName
//     },
//     incrementProject: function (number = 1) {
//         this.noOfProjects+= number;
//         return this.noOfProjects;
//     },
//     decrementProject: function (number = 1) {
//         this.noOfProjects -= number;
//         return this.noOfProjects;
//     },
// }

// function createObj(name,id,noOfProjects) {
//     let obj = Object.create(createMethod);
//     obj.name = name;
//     obj.id = id;
//     obj.noOfProjects = noOfProjects;
//     return obj;
// }


//using Pseodoclassical 


// function CreateObj(name,id,noOfProjects) {
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
// }

// CreateObj.prototype = {
//     getProjects : function () {
//         return this.noOfProjects;
//     },
//     changeName: function (newName) {
//         let preName = this.name
//         this.name = newName
//         return preName;
//     },
//     incrementProject: function (number = 1) {
//         this.noOfProjects+= number;
//         return this.noOfProjects;
//     },
//     decrementProject: function (number = 1) {
//         this.noOfProjects -= number;
//         return this.noOfProjects;
//     },
// }


//using  class 

class CreateObj {

    constructor (name,id,noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects() {
        return this.noOfProjects;
    }
    changeName(newName) {
        let preName = this.name;
        this.name = newName
        return preName;
    }
    incrementProject(number = 1) {
        this.noOfProjects+= number;
        return this.noOfProjects;
    }

    decrementProject(number = 1) {
        this.noOfProjects -= number;
        return this.noOfProjects;
    }
}



let description1 = new CreateObj ("Ram" , 10, 100);
let description2 = new CreateObj ("Raju" , 15, 99);
  