const FAKER =  require('faker');

export function getUser(){   
    
    let user = {};
    user.email = FAKER.internet.email();
    user.newsEmail = FAKER.internet.email();
    user.name =  FAKER.name.firstName();
    user.lastName = FAKER.name.lastName();
    user.password = FAKER.internet.password();
    user.yearOfBirth = String(Math.floor(Math.random() * (2004 - 1900 + 1)) + 1900);  //funct to return random beetween 1980 and 2004
    user.dayOfBirth = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    user.monthOfBirth = FAKER.date.month();

    //Address data
    user.company = FAKER.company.companyName();
    user.address = FAKER.address.streetAddress("###");
    user.secondaryAddress = FAKER.address.secondaryAddress();
    user.city = FAKER.address.cityName();
    user.state =  FAKER.address.state();
    user.zipCode = "91210";
    user.country = "United States";
    user.moreInfo = "This is my address for delivery purposes";
    user.homePhone = FAKER.phone.phoneNumberFormat();
    user.mobilePhone = FAKER.phone.phoneNumberFormat();
    user.addressAlias = "Delivery home address"; 

    return user;
}

export function allValidators(){

    let validData = {};

    validData.accountPage = "http://automationpractice.com/index.php?controller=my-account";
    validData.accountCreation = "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation";
    validData.welcomeText = "Welcome to your account. Here you can manage all of your personal information and orders.";
    validData.addedWishConfirmation = "Added to your wishlist.";
    validData.productAdded = "Product successfully added to your shopping cart";
    validData.emptyCart = "Your shopping cart is empty.";

    return validData;

}


