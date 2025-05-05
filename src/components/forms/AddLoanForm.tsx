import React from "react";

type Props = {
  onSubmit: () => void;
};

export default function AddLoanForm({ onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Loan Item"
        required
        className="block w-full border p-2 rounded mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        required
        className="block w-full border p-2 rounded mb-2"
      />
      <button
        type="submit"
        className="bg-teal-600 text-white px-4 py-2 rounded"
      >
        Add Loan
      </button>
    </form>
  );
}
