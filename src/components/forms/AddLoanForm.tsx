import React, { useState } from "react";
import { Transaction } from "../pages/Board";

type Props = {
  onSubmit: (loan: Transaction) => void;
};

export default function AddLoanForm({ onSubmit }: Props) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLoan: Transaction = {
      id: Date.now(),
      type: "loan",
      item,
      amount,
      date: new Date().toISOString().slice(0, 10),
      dueDate,
      status:
        new Date(dueDate).getTime() < Date.now() ? "Overdue" : "Up-to-date",
    };
    onSubmit(newLoan);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
      >
        Add Loan
      </button>
    </form>
  );
}
