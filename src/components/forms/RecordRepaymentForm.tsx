import React, { useState } from "react";
import { Transaction } from "../pages/Board";

type Props = {
  onSubmit: (repayment: Transaction) => void;
};

export default function RecordRepaymentForm({ onSubmit }: Props) {
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRepayment: Transaction = {
      id: Date.now(),
      type: "repayment",
      amount,
      date,
    };
    onSubmit(newRepayment);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        placeholder="Repayment Amount"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
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
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
      >
        Record Repayment
      </button>
    </form>
  );
}
