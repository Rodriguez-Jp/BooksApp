const Form = () => {
  return (
    <div className="block sm:w-2/5 w-full">
      <div className="p-2">
        <h1 className=" text-3xl font-bold text-center text-black">
          Add a <span className="text-red-500">Book!</span>
        </h1>
      </div>
      <div className="w-full shadow-xl p-5 bg-white rounded-xl">
        <form className="md:flex flex-col justify-center ">
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
            >
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
              placeholder="Number of pages"
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
            ></textarea>
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="Save!"
              className="bg-red-500 p-2 w-full rounded-md text-white cursor-pointer hover:bg-red-600 transition-colors duration-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
