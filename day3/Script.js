function fun1()
{
    let row = parseInt(prompt("Enter the row number to print star pattern:" ))
let string ="";
for(let i=0;i<=row;i++)
{
    for(let j=0;j<=i;j++)
    {
       string+='*'
    }
    string +="\n"
}
console.log(string)
}

function fun2()
{
    let number = parseInt(prompt("Enter the  number to find factorial:" ))
let fact =1
for(let i=1;i<=number;i++)
{
    fact= fact*i  
}
console.log(`Factorial of ${number} is ${fact}`)
}
function fun3()
{
    let operation = prompt("Enter the operation to perform add or sub or mul")
    let additon =(a,b)=>a+b
let subtraction = (a,b)=>a-b
let multiplication =(a,b)=>a*b
if(operation == "add")
{
    let a =parseInt(prompt("Enter value1"))
    let b =parseInt(prompt("Enter value2"))
    let sum =  additon(a,b)
    console.log(`sum of ${a} and ${b} is ${sum}` )
}
if(operation == "sub")
{
    let a =parseInt(prompt("Enter value1"))
    let b =parseInt(prompt("Enter value2"))
    let sub =  subtraction(a,b)
    console.log(`subtraction of ${a} and ${b} is ${sub}  ` )
}
if(operation == "mul")
{
    let a =parseInt(prompt("Enter value1"))
    let b =parseInt(prompt("Enter value2"))
    let mul =  multiplication(a,b)
    console.log(`multiplication of ${a} and ${b} is ${mul}  `)
}

}