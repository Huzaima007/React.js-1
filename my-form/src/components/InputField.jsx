function InputField({ label, name, type, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border rounded-lg  "
      />
    </div>
  );
}

export default InputField;


