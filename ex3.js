// for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
   firstArray.forEach(function(firstArray){ 
      if (secondArray.includes(firstArray)) {
        commonElements.push(firstArray);
      }
    });
  
    return commonElements;
    // Пиши код выше этой строки
  }