// shopping list factory function here
function createShoppingList() {
   let description = "";
   let price = 0.00;

   let shoppingItems = []

   function setDescription(val) {
       description = val;
    }
  
   function setPrice(val) {
       price = val;
   }
   function getDescription() {
       return description;
   }

   function getPrice() {
       return price.toFixed(2);
   }

   function addShoppingList() {
       shoppingItems.push({
           description,
           price
       })
   }

   function getShoppingList() {
       return shoppingItems;
   }

    function getTotalPrice(itemsList) {
        let totalCost = 0;
        for(let i = 0; i < itemsList.length; i++) {
            let currentItem = itemsList[i];
            totalCost += currentItem.price;
        }
        return totalCost.toFixed(2);
    }

   return {
       setDescription,
       setPrice,
       getDescription,
       getPrice,
       addShoppingList,
       getShoppingList,
       getTotalPrice

   }
}

// let shoppingListInstance = createShoppingList();
// shoppingListInstance.setDescription("The red apple");
// shoppingListInstance.setPrice(2.00);
// shoppingListInstance.addShoppingList()

// // console.log(shoppingListInstance.getDescription())
// // console.log(shoppingListInstance.getPrice());
// console.log(shoppingListInstance.getShoppingList());