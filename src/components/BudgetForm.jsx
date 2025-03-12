import { useState } from "react";
import axios from "axios";
import { BASE_API } from "../utils/api";

const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment"];

export default function BudgetForm() {
  const [category, setCategory] = useState(categories[0]);
  const [budget, setBudget] = useState("");
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_API}/api/budget/${month}`, {
      category,
      budget,
      month,
    });
    setBudget("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-lg space-y-4"
    >
      <h3 className="text-xl font-semibold text-purple-700">
        Set Monthly Budget
      </h3>

      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Budget Amount"
        className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        className="bg-purple-600 text-white p-3 w-full rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
      >
        💸 Set Budget
      </button>
    </form>
  );
}
