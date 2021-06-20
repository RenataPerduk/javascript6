const getNamesSortedByFriendCount = users => {
  return [...users].sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length).map(user=>user.name)
};