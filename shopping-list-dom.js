// shopping-list dom code here

let showBtnElem = document.querySelector('#showBtn');
let addBtnElem = document.querySelector('#addBtn');

const shoppingListInstance = createShoppingList();

function addItem() {
    let descriptionVal = document.querySelector('#description').value;
    let priceVal = Number(document.querySelector('#price').value);
    let budgetVal = Number(document.querySelector('#budget').value);
    let topicVal = document.querySelector('#topicWord').value;

    shoppingListInstance.setDescription(descriptionVal);
    shoppingListInstance.setPrice(priceVal);
    
    
    if(descriptionVal.includes(topicVal)) {
        shoppingListInstance.addShoppingList()
        let list = shoppingListInstance.getShoppingList()
        console.log(shoppingListInstance.getTotalPrice(list))
        let total = shoppingListInstance.getTotalPrice(shoppingListInstance.getShoppingList());

        if(total > budgetVal) {
            alert("greater than budget value");
        }

        document.querySelector('.totalPrice').innerHTML = total;
        console.log(list)
        for(let i = 0; i < list.length; i++) {
            let elem = list[i];
            document.querySelector('.display').innerHTML +=  '<span class="grid-item">' + elem.description + '</span>'

        }
        

    } 
    // else if(!(descriptionVal.includes(topicVal))){

    //     alert("topic word not added");
    //     shoppingListInstance.addShoppingList()

    //     let total = shoppingListInstance.getTotalPrice(shoppingListInstance.getShoppingList());

    //     if(total > budgetVal) {
    //         alert("The total budget has been exceeded");
    //     }
    // }
    
    
}

addBtnElem.addEventListener('click', addItem);

