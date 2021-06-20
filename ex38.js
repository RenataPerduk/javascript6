const sortByAscendingBalance = users => {
return users.sort((firstUser,secondUser) => 
firstUser.balance - secondUser.balance) 
};