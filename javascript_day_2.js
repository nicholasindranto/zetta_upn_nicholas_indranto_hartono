const bookName = "Zettabyte Nicholas Indranto Hartono";
const bookPrice = 100000;
const bookAmount = 10;

function price_discount(first_price, discount) {
  return first_price-(first_price*discount/100);
}

function price_tax(first_price, tax) {
  return first_price+(first_price*tax/100);
}

function book_purchasing(book_detail, percentage_discount, percentage_tax, amount_of_stock, amount_of_purchased_books) {
  let isDiscount;
  if (percentage_discount !== 0) {
    isDiscount = true;
  } else {
    isDiscount = false;
  }
  if (isDiscount) {
    let priceAfterDiscount = price_discount(bookPrice, percentage_discount);
    return "-Amount of discount\t: " + percentage_discount + 
           "\n-Price after discount\t: " + priceAfterDiscount + 
           "\n-Amount of tax\t\t: " + percentage_tax + 
           "\n-Price after tax\t: " + price_tax(priceAfterDiscount, percentage_tax);
  } else {
    return "-Amount of discount\t: " + percentage_discount + 
           "\n-Price after discount\t: " + bookPrice + 
           "\n-Amount of tax\t\t: " + percentage_tax + 
           "\n-Price after tax\t: " + price_tax(bookPrice, percentage_tax);
  }
}

for (let index = 0; index < bookAmount; index++) {
  let isBuy;
  console.log("Buy books? [y/n]");
  isBuy = 
  if (index === bookAmount) {
    
  } else {
    
  }
  console.log(book_purchasing(bookName, 25, 5, bookAmount, ));
}