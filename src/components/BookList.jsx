import { useEffect } from "react";
import Book from "./Book";

const BookList = ({ books, setBook, setBooks }) => {
  return (
    <>
      <div className="block  md:w-2/5 w-full md:h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {books && books.length ? (
          <>
            <div className="p-2 mt-10 md:mt-auto">
              <h1 className=" text-3xl font-bold text-center text-black">
                <span className="text-red-500">Book</span> List
              </h1>
            </div>
            {books.map((bookInfo) => {
              return (
                <Book
                  bookInfo={bookInfo}
                  key={bookInfo.id}
                  setBook={setBook}
                  books={books}
                  setBooks={setBooks}
                />
              );
            })}
          </>
        ) : (
          <>
            <div className="p-2 mt-10 md:mt-auto">
              <h1 className=" text-3xl font-bold text-center text-black">
                <span className="text-red-500">Book</span> List
              </h1>
            </div>
            <div className="text-center text-xl font-semibold mt-10">
              <h1>
                Please add some <span className="text-red-500">reviews</span> to
                your list!
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BookList;
