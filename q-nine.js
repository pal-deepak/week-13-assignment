let arr=[1,2,3,4,"deepak",5,6,7,"sachin"];
for(let n=0;n<9;n++)
{
    if(typeof(arr[n])=="string")
    {
        console.log("First string is:",arr[n]);
        break;
    }
}