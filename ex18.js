// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => { 
  const name = users.filter(user => user.eyeColor === color)
	return name
};