function findAccountById(accounts, id) {
  return accounts.find((account)=>account.id===id)
}


function sortAccountsByLastName(accounts) {
  return accounts.sort((accountOne, accountTwo)=> accountOne.name.last < accountTwo.name.last ? -1 : 1)
}


function getTotalNumberOfBorrows(account, books) {
  const accId = account.id
  let total = 0
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
  return total
}


function getBooksPossessedByAccount(account, books, authors) {
   let result = []
 let borrowMatch = []
 books.forEach((item) => {
  const borrowed = item.borrows
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  }
  const { id, title, genre, authorId, author, borrows } = book

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0]
   }
  })
 })
 return result
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
