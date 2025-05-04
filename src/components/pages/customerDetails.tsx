import { useParams } from "react-router-dom";

const mockData = {
  name: "Suresh",
  transactions: [
    {
      item: "Rice",
      amount: 300,
      dueDate: "2025-05-10",
      repayments: [{ date: "2025-05-02", amount: 100 }],
    },
  ],
};

export default function CustomerDetail() {
  const { id = "" } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Customer #{id} – {mockData.name} Transaction History
      </h1>
      <div className="space-y-4">
        {mockData.transactions.map((t, idx) => (
          <div key={idx} className="border rounded-md p-4 shadow-sm">
            <p>
              <strong>Item:</strong> {t.item}
            </p>
            <p>
              <strong>Loan Amount:</strong> ₹{t.amount}
            </p>
            <p>
              <strong>Due Date:</strong> {t.dueDate}
            </p>
            <p>
              <strong>Repayments:</strong>
            </p>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              {t.repayments.map((r, i) => (
                <li key={i}>
                  {r.date}: ₹{r.amount}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
