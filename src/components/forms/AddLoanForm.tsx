import { useState } from "react";

export default function AddLoanForm() {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Add loan:", { item, amount, dueDate });
    setItem("");
    setAmount("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Item / Description
        </label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Loan Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
      >
        Add Loan
      </button>
    </form>
  );
}
