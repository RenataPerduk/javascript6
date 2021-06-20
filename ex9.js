function changeEven (numbers, value) {
    // Пиши код ниже этой строки
  const  newChangeEven = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
     newChangeEven.push(number + value);
    } else {
     newChangeEven.push(number)
    }
  })
  return  newChangeEven
    // Пиши код выше этой строки
  }