const Container = ({ className, children }) => (
  <div className={`container w-3/4 mx-auto px-4 lg:px-12 ${className}`}>
    {children}
  </div>
);

export default Container;
