import { useEffect, useState } from "react";
import Alert from "./Alert";

const Form = ({ books, setBooks, book, setBook }) => {
  const [bookName, setBookName] = useState("");
  const [autor, setAutor] = useState("");
  const [category, setCategory] = useState("");
  const [numberPages, setNumberPages] = useState("");
  const [readIn, setReadIn] = useState("");
  const [review, setReview] = useState("");
  const [alert, setAlert] = useState({});
  const [editing, setEditing] = useState(false);

  //Function that generates a random id
  const generateId = () => {
    const id = crypto.randomUUID();
    return id;
  };

  useEffect(() => {
    //Validates if the books array has books
    if (books.length === 0) {
      return;
    }

    //If validation passes fill the form
    setEditing(true);
    const { bookName, autor, category, numberPages, readIn, review } = book;
    setBookName(bookName);
    setAutor(autor);
    setCategory(category);
    setNumberPages(numberPages);
    setReadIn(readIn);
    setReview(review);
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validates the form
    if (
      [
        bookName.trim(),
        autor.trim(),
        category,
        readIn.trim(),
        review.trim(),
        numberPages,
      ].includes("")
    ) {
      setAlert({ msg: "Please fill out all the fields", error: true });
      return;
    }

    if (numberPages <= 0) {
      setAlert({ msg: "The number of pages is invalid", error: true });
      return;
    }

    //If validation is passed

    //In case of previous errors
    setAlert({});
    //Add the book to the main array
    const bookObject = {
      bookName,
      autor,
      category,
      numberPages,
      readIn,
      review,
    };

    //Checks if user is editing
    if (editing) {
      bookObject.id = book.id;
      console.log(book);
      const booksUpdated = books.map((bookState) =>
        bookState.id === book.id ? bookObject : bookState
      );

      setBooks(booksUpdated);

      setEditing(false);

      //Shows the alert
      setAlert({ msg: "Book edited!", error: false });
    } else {
      //Add the book to the main books state
      bookObject.id = generateId();
      setBooks([...books, bookObject]);
      setAlert({ msg: "Book Added!", error: false });
    }

    //After the operation, cleans the form
    setTimeout(() => {
      setBookName("");
      setAutor("");
      setCategory("");
      setNumberPages("");
      setReadIn("");
      setReview("");
      setAlert({});
      setBook({});
    }, 1500);
  };

  const { msg } = alert;

  return (
    <div className="block md:w-2/5 w-full">
      <div className="p-2">
        <h1 className=" text-3xl font-bold text-center text-black">
          Add a <span className="text-red-500">Book!</span>
        </h1>
      </div>
      <div className="w-full shadow-xl p-5 bg-white rounded-xl">
        {msg && <Alert alert={alert} />}
        <form
          className="md:flex flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col p-2">
            <label className="font-semibold text-xl" htmlFor="book-name">
              Book name
            </label>
            <input
              type="text"
              name="book-name"
              id="book-name"
              className="p-2 rounded-lg border-2"
              placeholder="Book name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2">
            <label className="font-semibold text-xl" htmlFor="autor">
              Autor
            </label>
            <input
              type="text"
              name="autor"
              id="autor"
              className="p-2 rounded-lg border-2"
              placeholder="Autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2">
            <label className="font-semibold text-xl" htmlFor="category">
              Category
            </label>
            <select
              name="categoy"
              id="category"
              className="p-2 rounded-lg border-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled hidden>
                Select an Option
              </option>
              <option value="Comedy">Comedy</option>
              <option value="Self Help">Self Help</option>
              <option value="Horror">Horror</option>
              <option value="Adventure">Adventure</option>
              <option value="Love">Love</option>
              <option value="Action">Action</option>
              <option value="Cientific/Study">Cientific/Study</option>
            </select>
          </div>
          <div className="flex flex-col p-2">
            <label className="font-semibold text-xl" htmlFor="number-pages">
              Number of pages
            </label>
            <input
              type="number"
              name="number-pages"
              id="number-pages"
              className="p-2 rounded-lg border-2"
              placeholder="0"
              value={numberPages}
              onChange={(e) => setNumberPages(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2">
            <label className="font-semibold text-xl" htmlFor="read-in">
              Read in
            </label>
            <input
              type="date"
              name="read-in"
              id="read-in"
              className="p-2  rounded-lg border-2"
              placeholder="Read in"
              value={readIn}
              onChange={(e) => setReadIn(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2">
            <label className="font-semibold text-xl" htmlFor="review">
              Review
            </label>
            <textarea
              name="review"
              id="review"
              cols="30"
              rows="5"
              className="resize-none p-2 rounded-lg border-2"
              placeholder="Write your review!"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value={editing ? "Edit review" : "Save Review"}
              className="font-semibold text-xl bg-red-500 p-2 w-full rounded-md text-white cursor-pointer hover:bg-red-600 transition-colors duration-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
