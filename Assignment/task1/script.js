function fun1()
{
    let year = parseInt(prompt("Enter the year to check"))
    if((year %4 ==0 && year%100!=0 )|| year%400 ==0)
      alert(`The given year ${year} is absolutely a leap year`)
    else
        alert(`Sorry,The given year ${year} is not a leap year`)
}
function fun2()
{
    let marks = parseInt(prompt("Enter the marks of the student in range of 0-100"))
    if(marks>100 || marks<=0)
    {
    alert("You have entered in correct marks please enter correct marks")
    fun2()
    }
    else
    {
        if(marks>=90)
        alert(`congrats you scored "A" grade`)
        else if(marks>=80 && marks <=89)
        alert('welldone you got "B" grade ')
        else if(marks>=70 && marks <=79)
        alert('great you got "C" grade ')
        else if(marks>=60 && marks <=69)
        alert('very good you got "D" grade')
        else
        alert('OOPS you got "F" grade')
    }
}
function fun3()
{
    let num = parseInt(prompt("Enter the number to caluculate factorial")) 
    let fact=1
    for(let i=1;i<=num;i++)
    {
    fact*=i
    }
    alert(`The factorial of the given number ${num} is ${fact}`)
}
let randNum = Math.floor(Math.random()*100)+1
console.log(randNum)
function fun4()
{
    let num = parseInt(prompt("Enter a number in range of 1-100"))
    if(num<0 || num>100)
    {
        alert("Enter a number in range of 1-100")
        fun4()
    }
    else
    {
        while(true)
        {
            if(num>randNum)
            {
                alert("The guessing number is bigger please enter smaller number")
                fun4()
            }
            else if(num<randNum)
            {
                alert("The guessing number is smaller please enter bigger number")
                fun4()
            }
            else if(num == randNum)
            {
                alert(`You have guessed correct Number and the number is ${randNum}`)
                break;
            }
            else{
                alert('you have removed from game ')
            }
            
        }
    }
}