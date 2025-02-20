const Container = ({ id, className, children }) => (
  <div id={id} className={`container !mx-auto px-4 ${className}`}>
    {children}
  </div>
);

export default Container;
