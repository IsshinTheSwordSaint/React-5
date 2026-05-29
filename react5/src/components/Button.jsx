function Button({ label, variant = 'primary', size = 'md', disabled = false }) {
  return (
    <button className={`btn ${variant} ${size}`} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
