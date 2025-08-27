const prompt = require('prompt-sync')();

let items = [];

function mainMenu() {
  while (true) {
    let newItem = prompt("Enter item to add: ");
    let newQuantity = parseInt(prompt("Enter quantity: "));
    let newUnitPrice = parseFloat(prompt("Enter Unit Price: "));
    items.push({ item: newItem, quantity: newQuantity, unitPrice: newUnitPrice });
    let userChoice= prompt("Add More Items? (Yes/No): ");
    if (userChoice.toLowerCase() !== "yes") {
      break;
    }
  }

  let userCashier = prompt("Cashier: ");
  let userCustomer = prompt("Customer Name: ");
  let userDiscount = prompt("Customer Discount :");
  

  console.log('SEMICOLON STORES');
  console.log('MAIN BRANCH');
  console.log('LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.');
  console.log('TEL: 032938343');
  console.log("--------------------------------------------------");
  console.log(new Date().toLocaleString());
  console.log(`Cashier: ${userCashier}`);
  console.log(`Customer Name: ${userCustomer}`);
  console.log("--------------------------------------------------");
  console.log("--------------------------------------------------");
  console.log("Items:");
  let total = 0;
  let subtotal = 0;
  items.forEach((item) => {
    subtotal = item.quantity * item.unitPrice;
    total += subtotal;
    console.log("ITEMS\t  QTY\t PRICE\t TOTAL(NGN)\t");
    console.log(`${item.item}\t  ${item.quantity}\t ${item.unitPrice}\t ${subtotal}\t`);
  });
  console.log("--------------------------------------------------");
   let discount = (total * ( userDiscount / 100));
   let VAT = (total * (7.5 / 100));
     console.log(VAT);
     console.log(discount);

  console.log(`Discount : ${discount}`);
  console.log("--------------------------------------------------");
  console.log(`VAT: ${VAT}`);
  total = total + VAT - discount;
  console.log("--------------------------------------------------");
  
  
  
  console.log(`Total: ₦${total}`);
  console.log("THIS IS NOT A RECIEPT");
}



mainMenu();







