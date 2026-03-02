
const PingIndicator = ({className, contentClassName}) => {
  return (
    <span className={`absolute -top-2 -right-2 inline-flex h-3 w-3 ${className}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
      <span className={`relative inline-flex rounded-full h-3 w-3 bg-tertiary ${contentClassName}`} />
    </span>
  );
};

export default PingIndicator;
