let childprice=100
let adultorice=150
let seniorprice=120
 let childnum=2
 let adultnum=1
 let seniornum=1
 function Total_cost(childprice,childnum,adultorice,adultnum,seniorprice,seniornum)
 {
    let res=childprice*childnum + adultorice*adultnum +seniorprice*seniornum
    console.log("Total ticket price is:",res);
 }
 Total_cost(childprice,childnum,adultorice,adultnum,seniorprice,seniornum);