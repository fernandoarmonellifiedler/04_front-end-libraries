// Watch for JSX sintax:
// no special characters (font-size to fontSize)
// style object has pair key-value.
// value HAS to be between ''
// inline CSS is first than css file. takes precedence

const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>
    Dav Pilkey
  </h4>
);
