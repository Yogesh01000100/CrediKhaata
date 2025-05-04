import { useState } from "react";
import AddCustomerForm from "../forms/AddCustomerForm";
import AddLoanForm from "../forms/AddLoanForm";
import RecordRepaymentForm from "../forms/RecordRepaymentForm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { exportCustomerPDF } from "../../utils/exportPdf";

const mockCustomers = [
  {
    id: 1,
    name: "Suresh",
    contact: { email: "suresh@example.com", phone: "+91 98765 43210" },
    address: "123 Market St, Bhubaneswar, Odisha",
    joinDate: "2024-01-15",
    totalCredit: 5000,
    balance: 500,
    dueDate: "2025-04-28",
    status: "Overdue",
    transactions: [
      {
        id: 101,
        type: "loan",
        item: "Rice (10 kg)",
        amount: 300,
        date: "2025-04-01",
        dueDate: "2025-04-28",
        status: "Overdue",
      },
      { id: 102, type: "repayment", amount: 100, date: "2025-04-15" },
    ],
  },
  {
    id: 2,
    name: "Ramesh",
    contact: { email: "ramesh@example.com", phone: "+91 91234 56789" },
    address: "45 Gandhi Rd, Bhubaneswar, Odisha",
    joinDate: "2024-02-20",
    totalCredit: 2500,
    balance: 0,
    dueDate: "2025-05-10",
    status: "Up-to-date",
    transactions: [
      {
        id: 201,
        type: "loan",
        item: "Wheat Flour",
        amount: 500,
        date: "2025-04-10",
        dueDate: "2025-05-10",
        status: "Paid",
      },
    ],
  },
  {
    id: 3,
    name: "Mahesh",
    contact: { email: "mahesh@example.com", phone: "+91 99876 54321" },
    address: "78 Station Rd, Bhubaneswar, Odisha",
    joinDate: "2023-11-05",
    totalCredit: 1700,
    balance: 250,
    dueDate: "2025-05-02",
    status: "Overdue",
    transactions: [
      {
        id: 301,
        type: "loan",
        item: "Sugar (5 kg)",
        amount: 200,
        date: "2025-04-05",
        dueDate: "2025-05-02",
        status: "Overdue",
      },
      {
        id: 302,
        type: "loan",
        item: "Tea Leaves",
        amount: 50,
        date: "2025-04-15",
        dueDate: "2025-05-15",
        status: "Up-to-date",
      },
    ],
  },
  {
    id: 4,
    name: "Rajesh",
    contact: { email: "rajesh@example.com", phone: "+91 92345 67890" },
    address: "32 Temple St, Bhubaneswar, Odisha",
    joinDate: "2024-03-12",
    totalCredit: 3200,
    balance: 1200,
    dueDate: "2025-06-01",
    status: "Up-to-date",
    transactions: [
      {
        id: 401,
        type: "loan",
        item: "Oil (2 L)",
        amount: 1200,
        date: "2025-05-01",
        dueDate: "2025-06-01",
        status: "Up-to-date",
      },
    ],
  },
  {
    id: 5,
    name: "Yogesh",
    contact: { email: "yogesh@example.com", phone: "+91 93456 78901" },
    address: "56 Park Ave, Bhubaneswar, Odisha",
    joinDate: "2024-05-30",
    totalCredit: 0,
    balance: 0,
    dueDate: "—",
    status: "Up-to-date",
    transactions: [],
  },
  {
    id: 6,
    name: "Anjali",
    contact: { email: "anjali@example.com", phone: "+91 94567 89012" },
    address: "89 Lake View, Bhubaneswar, Odisha",
    joinDate: "2024-04-22",
    totalCredit: 700,
    balance: 300,
    dueDate: "2025-05-07",
    status: "Up-to-date",
    transactions: [
      {
        id: 601,
        type: "loan",
        item: "Spices Set",
        amount: 300,
        date: "2025-04-07",
        dueDate: "2025-05-07",
        status: "Up-to-date",
      },
    ],
  },
  {
    id: 7,
    name: "Priya",
    contact: { email: "priya@example.com", phone: "+91 95678 90123" },
    address: "14 Hill Rd, Bhubaneswar, Odisha",
    joinDate: "2023-12-10",
    totalCredit: 1500,
    balance: 750,
    dueDate: "2025-05-02",
    status: "Overdue",
    transactions: [
      {
        id: 701,
        type: "loan",
        item: "Paneer (1 kg)",
        amount: 500,
        date: "2025-04-02",
        dueDate: "2025-05-02",
        status: "Overdue",
      },
      { id: 702, type: "repayment", amount: 250, date: "2025-04-25" },
    ],
  },
  {
    id: 8,
    name: "Ram",
    contact: { email: "ram@example.com", phone: "+91 95678 90123" },
    address: "14 Hill Rd, Bhubaneswar, Odisha",
    joinDate: "2023-12-10",
    totalCredit: 1500,
    balance: 750,
    dueDate: "2025-05-02",
    status: "Overdue",
    transactions: [
      {
        id: 701,
        type: "loan",
        item: "Paneer (1 kg)",
        amount: 500,
        date: "2025-04-02",
        dueDate: "2025-05-02",
        status: "Overdue",
      },
      { id: 702, type: "repayment", amount: 250, date: "2025-04-25" },
    ],
  },
];

type FormType = "customer" | "loan" | "payment" | null;
type Customer = (typeof mockCustomers)[0];

export default function Dashboard() {
  const [expandedForm, setExpandedForm] = useState<FormType>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(
    mockCustomers[0]
  );

  const currentIndex = mockCustomers.findIndex(
    (c) => c.id === selectedCustomer.id
  );

  const handleSelectCustomer = (c: Customer) => {
    setSelectedCustomer(c);
    setExpandedForm(null);
  };

  const renderCustomerCard = () => (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg mb-6 transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <AccountCircleIcon className="text-teal-600" fontSize="large" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {selectedCustomer.name}
            </h3>
            <span
              className={`mt-2 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                selectedCustomer.status === "Overdue"
                  ? "bg-orange-100 text-orange-700 dark:bg-orange-200 dark:text-orange-700"
                  : "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-700"
              }`}
            >
              {selectedCustomer.status}
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedCustomer(mockCustomers[currentIndex - 1])}
            disabled={currentIndex <= 0}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            <ChevronLeftIcon
              className="text-gray-600 dark:text-gray-300"
              fontSize="small"
            />
          </button>
          <button
            onClick={() => setSelectedCustomer(mockCustomers[currentIndex + 1])}
            disabled={currentIndex >= mockCustomers.length - 1}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            <ChevronRightIcon
              className="text-gray-600 dark:text-gray-300"
              fontSize="small"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Joined:</span>{" "}
            {selectedCustomer.joinDate}
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span>{" "}
            {selectedCustomer.contact.phone}
          </p>
          <p className="text-sm">
            <span className="font-medium">Address:</span>{" "}
            {selectedCustomer.address}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Total Credit:</span> ₹
            {selectedCustomer.totalCredit}
          </p>
          <p className="text-sm">
            <span className="font-medium">Next Due:</span>{" "}
            {selectedCustomer.dueDate}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <button
          onClick={() => exportCustomerPDF(selectedCustomer)}
          className="flex items-center bg-teal-600 text-white px-2 py-1.5 rounded-lg text-sm hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors"
        >
          <PictureAsPdfIcon fontSize="small" className="mr-2" />
          Export
        </button>
      </div>

      <hr className="border-t-2 border-dashed border-gray-300 dark:border-gray-600 my-5" />

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Transactions
        </h4>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
          {selectedCustomer.transactions.map((t) => (
            <li key={t.id} className="py-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  {t.type === "loan" ? t.item : "Repayment"}
                </span>
                <span className="text-sm">₹{t.amount}</span>
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {t.type === "loan" ? `Due ${t.dueDate}` : `On ${t.date}`}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderFormsSection = () => {
    if (expandedForm) {
      return (
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow space-y-4 transition-colors">
          <button
            onClick={() => setExpandedForm(null)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline transition-colors"
          >
            ← Close Form
          </button>
          {expandedForm === "customer" && <AddCustomerForm />}
          {expandedForm === "loan" && <AddLoanForm />}
          {expandedForm === "payment" && <RecordRepaymentForm />}
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div
          onClick={() => setExpandedForm("customer")}
          className="cursor-pointer bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            + Add Customer
          </h3>
        </div>
        <div
          onClick={() => setExpandedForm("loan")}
          className="cursor-pointer bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            + Add Loan
          </h3>
        </div>
        <div
          onClick={() => setExpandedForm("payment")}
          className="cursor-pointer bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            + Record Repayment
          </h3>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-800 transition-colors">
      <main className="container mx-auto px-6 py-8 flex flex-col lg:flex-row lg:space-x-8">
        <section className="flex-1 mb-8 lg:mb-0">
          <div className="flex mb-5">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 flex flex-col space-y-3 transition-colors">
              <div className="flex items-center space-x-1.5">
                <InfoOutlinedIcon className="text-teal-600" fontSize="small" />
                <h4 className="text-teal-700 dark:text-teal-300 font-bold text-md">
                  Welcome to CrediKhaata!
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-xs">
                CrediKhaata is your one-stop ledger for tracking credit sales
                and repayments. Easily add customers, record loans, and view
                outstanding balances all in a simple dashboard so you can focus
                on running your shop, while we handle the numbers.
              </p>
            </div>
          </div>

          <div className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-4">
            Customers
          </div>
          <div className="overflow-x-auto bg-white dark:bg-gray-700 rounded-lg shadow transition-colors">
            <table className="min-w-full">
              <thead className="bg-teal-100 dark:bg-teal-800">
                <tr>
                  {["Name", "Balance", "Next Due", "Status"].map((th) => (
                    <th
                      key={th}
                      className="px-6 py-3 text-left text-sm font-medium text-teal-600 dark:text-teal-300"
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 transition-colors">
                {mockCustomers.map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => handleSelectCustomer(c)}
                    className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                  >
                    <td className="px-6 py-4 text-teal-700 dark:text-teal-300 font-semibold">
                      {c.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">
                      ₹{c.balance}
                    </td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">
                      {c.dueDate}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                          c.status === "Overdue"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-200 dark:text-orange-700"
                            : "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-700"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="w-full lg:w-1/3 space-y-6">
          {renderCustomerCard()}
          {renderFormsSection()}
        </aside>
      </main>
    </div>
  );
}
