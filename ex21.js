// Пиши код ниже этой строки
const getFriends = (users) => {
   const allFriends = users.flatMap(user => user.friends)
   const newArrayFriends = allFriends.filter((friend,index,allFriends) => allFriends.indexOf(friend) === index);
  return newArrayFriends
};
// Пиши код выше этой строки