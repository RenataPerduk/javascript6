//  for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

  function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

 

 orderedItems.forEach(function( orderedItems, index,){
 	totalPrice += orderedItems;
 }); 
  // Пиши код выше этой строки
  return totalPrice;
}