import { useForm } from "react-hook-form";
import { Transaction } from "../pages/Board";

type Props = {
  onSubmit: (repayment: Transaction) => void;
};

type RepaymentFormInputs = {
  amount: string;
  date: string;
};

export default function RecordRepaymentForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RepaymentFormInputs>();

  const handleFormSubmit = (data: RepaymentFormInputs) => {
    const amount = parseFloat(data.amount);
    onSubmit({
      id: Date.now(),
      type: "repayment",
      amount,
      date: data.date,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <input
        type="number"
        {...register("amount", {
          required: "Amount is required",
          min: { value: 1, message: "Enter a valid amount" },
        })}
        placeholder="Repayment Amount"
        className="w-full border p-2 rounded"
      />
      {errors.amount && (
        <p className="text-red-500 text-sm">{errors.amount.message}</p>
      )}

      <input
        type="date"
        {...register("date", { required: "Date is required" })}
        className="w-full border p-2 rounded"
      />
      {errors.date && (
        <p className="text-red-500 text-sm">{errors.date.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
      >
        Record Repayment
      </button>
    </form>
  );
}
