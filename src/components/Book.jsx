const Book = ({ bookInfo }) => {
  //Extracts the book info
  const { bookName, autor, category, numberPages, readIn, review } = bookInfo;

  console.log(bookInfo);

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
      </div>
    </>
  );
};

export default Book;
