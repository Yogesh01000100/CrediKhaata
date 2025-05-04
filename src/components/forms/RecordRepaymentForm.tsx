import { useState } from "react";

export default function RecordRepaymentForm() {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Record repayment:", { amount, date });
    // TODO: call API or update state
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Repayment Amount
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
          Repayment Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
      >
        Record Payment
      </button>
    </form>
  );
}
