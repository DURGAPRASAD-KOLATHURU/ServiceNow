// const person =  {
//     name : 'durga',
//     age : 22,
//     getname : function(){
//         console.log(this)
//     }
// }
// person.getname()
// console.log(this)
// let a= [1,2,3,4,5]
// let b = a.reduce((pv,num)=>pv+num)
// console.log(b)
// let even = a.filter(num=>num%2==0)
// console.log(even)
// let triple = a.map((num)=>num*5)
// console.log(triple)
// class person{
//     constructor(name,age)
//     {

//         this.name = name,
//         this.age =age
//     }
//     getname(){
//         return this.name
//     }
//     getage()
//     {
//         return this.age
//     }
// }
// let p1 = new person("durga",22)
// console.log(p1.getname());
// console.log(p1.getage());
// class Animal{
//     speak()
//     {
//         console.log("Animal makes sound");
//     }
// }
// class Dog extends Animal{
//     constructor(name,age)
//     {
//         super()
//         this.name=name,
//         this.age =age
//     }
//     speak()
//     {
//         console.log("Dog barks");
//     }
// }
// let d1 = new Dog("jockey",7)
// d1.speak()
// console.log(d1.name);
class student
{
    constructor(name,age)
    {
        this.name =name,
        this.age = age
    }
    getname(){
        return this.name
    }
    getage()
    {
        return this.age
    }
}
let s1= new student("durga",10)
let s2 = new student("prasad",15)
let s3= new student("ram",20)
let s4 = new student("bharat",25)
let s5= new student("lakshman",30)
console.log(s1.getname());
console.log(s1.getage());
console.log(s2.getname());
console.log(s2.getage());
let age = [s1,s2,s3,s4,s5]
let result = age.filter(age=>age.getage()>=20)
console.log(result)
