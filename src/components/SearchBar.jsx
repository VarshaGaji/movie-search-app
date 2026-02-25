export default function SearchBar({ value, onChange }) {
  return (
    <input
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: 10, width: "100%", marginBottom: 20 }}
    />
  );
}