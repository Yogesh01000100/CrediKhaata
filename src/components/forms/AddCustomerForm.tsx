import { useState } from "react";

export default function AddCustomerForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Add customer:", name);
    // TODO: call API or update state
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Customer Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
      >
        Add Customer
      </button>
    </form>
  );
}
