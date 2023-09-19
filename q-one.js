let Totalvalue=2000;
let Discount=20
function finateprice(Totalvalue,Discount)
{
    let original = (Totalvalue*(100-Discount))/100
    // let original=6
    console.log(`The final price after discount: ${original}`);
}
finateprice(Totalvalue,Discount);