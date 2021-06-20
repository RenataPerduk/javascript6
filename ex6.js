// Пиши код ниже этой строки
const calculateTotalPrice =orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach((orderedItem) => { 
    totalPrice += orderedItem;
  });
 
	return totalPrice
}


// Пиши код выше этой строки