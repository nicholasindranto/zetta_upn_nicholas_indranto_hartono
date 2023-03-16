const bookName = "Zettabyte Nicholas Indranto Hartono";
const bookPrice = 100000;
const bookAmount = 10;

function price_discount (first_price, discount) {
  return first_price-(first_price*discount/100);
}

function price_tax (first_price, tax) {
  return first_price+(first_price*tax/100);
}

function price_credit (final_price, times_credit) {
  return Math.round(final_price/times_credit);
}

function book_purchasing(book_detail, percentage_discount, percentage_tax, amount_of_stock, amount_of_purchased_books, term_of_credit) {
  let isDiscount = (percentage_discount !== 0) ? true : false;
  let stock = amount_of_stock;
  let buyBook = amount_of_purchased_books;
  let totalPrice = 0;
  for (let index = 0; index <= amount_of_stock; index++) {
    let isBuy = (stock >= buyBook) ? true : false;
    if (isBuy) {
      if (index != 0) console.log("\n\nStock is available. Remaining stock : " + stock + ". Buy again?\nYes, " + buyBook + " book again.\n");
      stock -= buyBook;
      totalPrice = buyBook * bookPrice;
    } else if ((stock > 0) && (isBuy === false)) {
      if (index != 0) console.log("\n\nStock is not available for " + buyBook + " book. Remaining stock : " + stock + ". Buy again?\nYes, " + stock + " book again.\n");
      buyBook = stock;
      stock -= buyBook;
      totalPrice = buyBook * bookPrice;
    } else {
      console.log("\n\nBook out of Stock\n");
      break;
    }
    let credit = [];
    let time_credit = ["January", "February", "March     ", "April      ", "May        ", "June       ", "July      ", "August  ", "September", "October ", "November", "December"];
    let priceAfterTax;
    if (isDiscount) {
      let priceAfterDiscount = price_discount(totalPrice, percentage_discount);
      priceAfterTax = price_tax(priceAfterDiscount, percentage_tax);
      console.log("\n\n-Number of book purchased\t: " + buyBook +
                  "\n-Total price\t\t\t: " + totalPrice +
                  "\n-Amount of discount\t\t: " + percentage_discount + 
                  "\n-Price after discount\t\t: " + priceAfterDiscount + 
                  "\n-Amount of tax\t\t\t: " + percentage_tax + 
                  "\n-Price after tax\t\t: " + price_tax(priceAfterDiscount, percentage_tax));
    } else {
      priceAfterTax = price_tax(totalPrice, percentage_tax);
      console.log("\n\n-Number of book purchased\t\t: " + buyBook +
                  "\n-Total price\t\t\t: " + totalPrice +
                  "\n-Amount of discount\t\t: " + percentage_discount + 
                  "\n-Price after discount\t\t: " + totalPrice + 
                  "\n-Amount of tax\t\t\t: " + percentage_tax + 
                  "\n-Price after tax\t\t: " + price_tax(totalPrice, percentage_tax));
    }
    for (let index = 0; index < term_of_credit; index++) credit.push(price_credit(priceAfterTax, term_of_credit));
    console.log("\n\n---------------------------------");
    console.log("|Month\t\t|Term of Credit\t|");
    console.log("---------------------------------");
    time_credit.forEach((time, index) => {
      if (index < term_of_credit) {
        console.log("|" + time + "\t|" + credit[index] +"\t\t|");
      }
    });
    console.log("---------------------------------");
  }
}

let amount = 10;
let credit = 2;
console.log("Buy book?\n");
console.log(amount + " book " + bookName);
console.log("How many times you want to pay as credit?\n");
if (credit <= 12) {
  console.log("I want to credit it " + credit + " times per month.\n");
  if (amount <= bookAmount) {
    console.log("Stock is available. Remaining stock : " + bookAmount);
    book_purchasing(bookName, 25, 5, bookAmount, amount, credit);
  } else console.log("\nBook out of Stock.\nRemaining stock : " + bookAmount + ".\n");
} else console.log("You can only credit it within 12 times or 1 time per month.\n");