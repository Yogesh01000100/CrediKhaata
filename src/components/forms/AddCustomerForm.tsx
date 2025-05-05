import React, { useState } from "react";
import { Customer } from "../pages/Board";

type Props = {
  onSubmit: (newCustomer: Customer) => void;
};

export default function AddCustomerForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date().toISOString().slice(0, 10);
    const newCustomer: Customer = {
      id: Date.now(),
      name,
      contact: { email, phone },
      address,
      joinDate: today,
      totalCredit: 2000,
      balance: 0,
      dueDate: "—",
      status: "Up-to-date",
      transactions: [],
    };
    onSubmit(newCustomer);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        className="block w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
      >
        Add Customer
      </button>
    </form>
  );
}
