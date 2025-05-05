import React, { useState } from "react";
import { Transaction } from "../pages/Board";

type Props = {
  onSubmit: (loan: Transaction) => void;
};

export default function AddLoanForm({ onSubmit }: Props) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    const dueTime = new Date(dueDate).getTime();
    const now = Date.now();

    onSubmit({
      id: Date.now(),
      type: "loan",
      item,
      amount: amt,
      date: new Date().toISOString().split("T")[0],
      dueDate,
      status: dueTime < now ? "Overdue" : "Up-to-date",
    });

    setItem("");
    setAmount("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="item"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Item"
        required
        className="w-full border p-2 rounded"
      />

      <input
        name="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        className="w-full border p-2 rounded"
      />

      <input
        name="dueDate"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
      >
        Add Loan
      </button>
    </form>
  );
}
