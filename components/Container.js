const Container = ({ id, className, children }) => (
  <div
    id={id}
    className={`relative overflow-hidden w-full max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-3/4 px-4 flex flex-col items-center justify-center mx-auto ${className}`}
    style={{ margin: "0 auto" }}
  >
    {children}
  </div>
);

export default Container;
