import React, { useState } from "react";
import axios from "axios";

const plans = [
  { id: "2", label: "2 Classes / Week", price: "$30", classes: 8 },
  { id: "3", label: "3 Classes / Week", price: "$40", classes: 12 },
  { id: "4", label: "4 Classes / Week", price: "$50", classes: 16 },
  { id: "5", label: "5 Classes / Week", price: "$60", classes: 20 },
];

const EnrollmentModal = ({ courseId, onClose, onSuccess }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [preferredTime, setPreferredTime] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    if (!selectedPlan) return alert("Please select a fee plan.");

    setLoading(true);
    try {
      await axios.post(
        `/api/v1/enrollments/enroll/${courseId}`,
        { preferredTime, note, plan: selectedPlan.label },
        { withCredentials: true }
      );
      alert("Enrollment successful!");
      onSuccess();
      onClose();
    } catch (error) {
      alert("Enrollment failed. Maybe you're already enrolled.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative shadow-lg">
        <button
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          Select Your Plan
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`cursor-pointer border rounded-lg p-4 text-center transition-all ${
                selectedPlan?.id === plan.id
                  ? "border-yellow-600 bg-yellow-50 shadow-md"
                  : "hover:border-yellow-400"
              }`}
            >
              <h4 className="font-semibold text-lg mb-1">{plan.label}</h4>
              <p className="text-xl font-bold">{plan.price}</p>
              <p className="text-sm text-gray-600">
                {plan.classes} classes/month
              </p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Preferred Time</label>
          <input
            type="text"
            placeholder="e.g. 6 PM - 7 PM"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Any Note</label>
          <textarea
            placeholder="Optional..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          onClick={handleEnroll}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-lg"
        >
          {loading ? "Enrolling..." : "Confirm Enrollment"}
        </button>
      </div>
    </div>
  );
};

export default EnrollmentModal;
