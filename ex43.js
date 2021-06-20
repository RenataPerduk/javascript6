// Пиши код ниже этой строки
const getSortedFriends = users => {
  return [...users]
  .flatMap(user => user.friends)
  .filter((friends,index,users) => users.indexOf(friends) === index)
  .sort((prevFriend,nextFriend) => prevFriend.localeCompare(nextFriend))
};
// Пиши код выше этой строки