export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={value}
      onChange={onChange}
      className="w-full glass rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-sky-500"
    />
  )
}