const sortByDescendingFriendCount = users => {
  return [...users].sort((firstUser,secondUser) => secondUser.friends.length - firstUser.friends.length) 
};