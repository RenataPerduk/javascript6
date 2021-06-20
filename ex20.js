// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
   const newName = users.filter(user => user.friends.includes(friendName))
   return newName
};
// Пиши код выше этой строки
