const  sortByName = users => {
  return [...users].sort((firstName,secondName) => firstName.name.localeCompare(secondName.name)) 
};