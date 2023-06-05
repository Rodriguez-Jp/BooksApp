import Header from "./components/Header";
import Form from "./components/Form";
import BookList from "./components/BookList";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  useEffect(() => {
    const getLS = () => {
      const data = JSON.parse(localStorage.getItem("books")) ?? [];
      console.log(data);
      setBooks(data);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <Header />
      <div className="w-full md:flex md:justify-around block mt-5 ">
        <Form books={books} setBooks={setBooks} book={book} setBook={setBook} />
        <BookList books={books} setBook={setBook} setBooks={setBooks} />
      </div>
    </>
  );
}

export default App;
