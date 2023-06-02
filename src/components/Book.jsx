const Book = () => {
  return (
    <>
      <div className="bg-white rounded-xl w-full shadow-xl p-5 mb-5 ">
        <p className="font-bold text-gray-500 text-lg mb-5">
          Book name: <span className="text-black font-normal">Corree!</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Autor: <span className="text-black font-normal">Pepito perez</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Category: <span className="text-black font-normal">Comedy</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Number of pages:{" "}
          <span className="text-black font-normal">762 pages</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Read in: <span className="text-black font-normal">March 12 2023</span>
        </p>
        <p className="font-bold text-gray-500 text-lg mb-5">
          Review:{" "}
          <span className="text-black font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ex
            veniam laboriosam aliquid blanditiis delectus dolores dolor quis
            quam facere.
          </span>
        </p>
      </div>
    </>
  );
};

export default Book;
