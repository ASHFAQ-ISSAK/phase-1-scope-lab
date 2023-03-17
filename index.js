var customerName = "bob";

function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}

// console.log(upperCaseCustomerName())
//the code above takes in the globally declared variable and uses it in a function to uppercase it

function setBestCustomer(){
    return bestCustomer = 'not bob' 
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob'
}

const LeastFavoriteCustomer = 'andrew'

function changeLeastFavoriteCustomer(){
   return  LeastFavoriteCustomer = 'ASHFAQ'
}

