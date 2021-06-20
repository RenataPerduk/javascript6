// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => { 
  const name = users.filter(user => minAge <= user.age && user.age <= maxAge);
	return name
};
// Пиши код выше этой строки