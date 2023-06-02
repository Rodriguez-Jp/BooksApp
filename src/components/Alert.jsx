const Alert = ({ alert }) => {
  return (
    <>
      <div
        className={`${
          alert.error
            ? "p-2 bg-red-500  rounded-lg text-center"
            : "p-2 bg-green-500  rounded-lg text-center"
        }`}
      >
        <h1 className="text-white font-bold text-xl ">{alert.msg}</h1>
      </div>
    </>
  );
};

export default Alert;
