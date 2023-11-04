function fun1()
{
    var name =  prompt(`Enter the student name`)
    var age = parseInt(prompt("Enter the student age"))
    var grade = prompt("Enter the student grade")
    var s1 = {
        name : name,
        age :  age,
        grade : grade
    }
    for( s in s1)
    {
        console.log(`The student details are ${s} : ${s1[s]}`)
    }
}
let sum = ()=>
{
    let a = parseInt(prompt("Enter value1"))
    let b = parseInt(prompt("Enter value2"))
    let c =a+b
    console.log(`The sum of ${a} and ${b} is: ${c}`)
}

let str = "I am enjoying my training "
console.log(str.slice(14,16))
console.log(str[14])
console.log(str.slice(3))
let  a = str.slice(0,4)
console.log(a)
let b =str.replace("training","journey")
console.log(b)
for(let i =0 ;i<str.length;i++)
{
    console.log(str.charAt(i))
}    
let str1 ="a,b,c"
let arr1 = str1.split(",")
console.log(arr1)
let str2 = " abc "
let c = str2.trim()
console.log(c)
let d = str1.concat(str2)
console.log(d)
