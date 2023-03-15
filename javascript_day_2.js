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
    } else {
      console.log("\n\nBook out of Stock\n");
      break;
    }
    if (isDiscount) {
      let priceAfterDiscount = price_discount(totalPrice, percentage_discount);
      console.log("\n\n-Number of book purchased\t: " + buyBook +
                  "\n-Total price\t\t\t: " + totalPrice +
                  "\n-Amount of discount\t\t: " + percentage_discount + 
                  "\n-Price after discount\t\t: " + priceAfterDiscount + 
                  "\n-Amount of tax\t\t\t: " + percentage_tax + 
                  "\n-Price after tax\t\t: " + price_tax(priceAfterDiscount, percentage_tax));
    } else {
      console.log("\n\n-Number of book purchased\t\t: " + buyBook +
                  "\n-Total price\t\t\t: " + totalPrice +
                  "\n-Amount of discount\t\t: " + percentage_discount + 
                  "\n-Price after discount\t\t: " + totalPrice + 
                  "\n-Amount of tax\t\t\t: " + percentage_tax + 
                  "\n-Price after tax\t\t: " + price_tax(totalPrice, percentage_tax));
    }
  }
}

let amount = 5;
console.log("Buy book?\n");
console.log(amount + " book " + bookName);
if (amount <= bookAmount) {
  console.log("Stock is available. Remaining stock : " + bookAmount);
  book_purchasing(bookName, 25, 5, bookAmount, amount);
} else console.log("\nBook out of Stock.\nRemaining stock : " + bookAmount + ".\n");