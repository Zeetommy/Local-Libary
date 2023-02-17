function findAuthorById(authors, id) {
  return authors.find((author)=>author.id === id)
}
function findBookById(books, id) {
  return books.find((book)=>book.id === id)
}
function partitionBooksByBorrowedStatus(books) {
  return books.reduce((total, book)=> { total[+       (book.borrows[0] &&                book.borrows[0].returned)].push(book) 
  return total},[[],[]])
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned })=> {
  const account = accounts.find(account => account.id === id)
    return {
      ...account,
      returned,
    }
  })
  return borrowers
    .sort((borrowerA, borrowerB) => {
      const companyA = borrowerA.company
      const companyB = borrowerB.company
      return companyA.localeCompare(companyB)
    })
    .slice(0, 10)
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
