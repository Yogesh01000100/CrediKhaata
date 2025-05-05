// src/components/forms/RecordRepaymentForm.tsx
import React, { useState } from "react";
import { Transaction } from "../pages/Board";

type Props = {
  onSubmit: (repayment: Transaction) => void;
};

export default function RecordRepaymentForm({ onSubmit }: Props) {
  const [amount, setAmount] = useState<string>(""); // start empty
  const [date, setDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // parse + validate
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      return alert("Please enter a valid repayment amount greater than 0");
    }
    if (!date) {
      return alert("Please select a date for the repayment");
    }

    onSubmit({
      id: Date.now(),
      type: "repayment",
      amount: amt,
      date,
    });

    // reset
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        placeholder="Repayment Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
      >
        Record Repayment
      </button>
    </form>
  );
}
