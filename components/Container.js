const Container = ({ id, className, children }) => (
  <div
    id={id}
    className={`relative w-full lg:w-[95%] overflow-x-hidden px-4 flex flex-col items-center justify-center mx-auto ${className}`}
    style={{ margin: "0 auto" }}
  >
    {children}
  </div>
);

export default Container;
