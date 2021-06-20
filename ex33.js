// Пиши код ниже этой строки
const getTotalFriendCount = users => {
 return users.reduce((total, user) => {
  	return total + user.friends.length;
  },0) 
};
// Пиши код выше этой строки