const Container = ({ id, className, children }) => (
  <div
    id={id}
    className={`relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-3/4 px-4 flex flex-col items-center justify-center mx-auto ${className}`}
    style={{ margin: "0 auto" }} // Force centering in all cases
  >
    {children}
  </div>
);

export default Container;
