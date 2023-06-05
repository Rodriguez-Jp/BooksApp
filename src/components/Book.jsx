const Book = ({ bookInfo, setBook, books, setBooks }) => {
  //Extracts the book info
  const { bookName, autor, category, numberPages, readIn, review } = bookInfo;

  //Function to delete a book
  const handleDelete = () => {
    const prompt = confirm(`Would you like to delete ${bookName}?`);
    if (prompt) {
      const booksUpdated = books.filter((book) => book.id !== bookInfo.id);
      setBooks(booksUpdated);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl w-full shadow-xl p-5 mb-5 ">
        <p className="font-bold text-gray-500 text-lg mb-5">
          Book name: <span className="text-black font-normal">{bookName}</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Autor: <span className="text-black font-normal">{autor}</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Category: <span className="text-black font-normal">{category}</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Number of pages:{" "}
          <span className="text-black font-normal">{numberPages} pages</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Read in: <span className="text-black font-normal">{readIn}</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Review: <span className="text-black font-normal">{review}</span>
        </p>
        <div className="flex justify-evenly">
          <button
            type="button"
            className="bg-black text-white p-2 rounded-lg w-2/5 font-semibold text-xl"
            onClick={() => {
              setBook(bookInfo);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded-lg w-2/5 font-semibold text-xl"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
