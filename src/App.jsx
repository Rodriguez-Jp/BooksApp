import Header from "./components/Header";
import Form from "./components/Form";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  return (
    <>
      <Header />
      <div className="w-full md:flex md:justify-around block mt-5 ">
        <Form books={books} setBooks={setBooks} book={book} setBook={setBook} />
        <BookList books={books} setBook={setBook} />
      </div>
    </>
  );
}

export default App;
