import React from "react";

type Props = {
  onSubmit: () => void;
};

export default function AddCustomerForm({ onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        required
        className="block w-full border p-2 rounded mb-2"
      />
      <input
        type="text"
        placeholder="Phone Number"
        required
        className="block w-full border p-2 rounded mb-2"
      />
      <button
        type="submit"
        className="bg-teal-600 text-white px-4 py-2 rounded"
      >
        Add Customer
      </button>
    </form>
  );
}
