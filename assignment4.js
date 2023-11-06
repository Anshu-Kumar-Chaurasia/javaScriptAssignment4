ASSIGNMENT:4

Q2

const Check_Leap = (year) =>
{
        if(year%4==0)
        {
            return ("leap year");
        }
        else
        {
            return ("not leap year");
        }
}
console.log(Check_Leap(2015));



Q3

const Perfect_number_check = (n) =>
{
    if(n<=0)
    {
        return false;
    }
    let space=0;
    for(let i=1;i<n;i++)
    {
        if(n%i==0)
        {
            space+=i;
        }
    }
    return space;
}
console.log(Perfect_number_check(28));

Q4

const Reverse_Number = () =>
{
    let n=1234;
    let a=n.toString().split('').reverse().join(); //split converts string into array.
    return a;
}
console.log(Reverse_Number())


Q5

const Substring_check = () =>
{
    let s="Hi this is prepbuddy";
    let b="prepbuddy";
    if(s.includes(b))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(Substring_check())


