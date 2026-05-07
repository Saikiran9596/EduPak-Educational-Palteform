"use client";

import { Badge } from "@/components/ui";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const slots = ["Morning", "Afternoon", "Evening"];

// Mock availability (In real app, this would come from DB)
const mockAvailability: Record<string, string[]> = {
  Mon: ["Afternoon", "Evening"],
  Tue: ["Evening"],
  Wed: ["Morning", "Evening"],
  Thu: ["Afternoon"],
  Fri: ["Morning", "Afternoon", "Evening"],
  Sat: ["Morning"],
  Sun: [],
};

export function AvailabilityGrid() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-slate-100 min-w-[500px]">
        <thead>
          <tr>
            <th className="p-3 border border-slate-100 bg-slate-50"></th>
            {days.map(d => (
              <th key={d} className="p-3 border border-slate-100 bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map(slot => (
            <tr key={slot}>
              <td className="p-3 border border-slate-100 bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase vertical-lr">{slot}</td>
              {days.map(day => {
                const isAvailable = mockAvailability[day]?.includes(slot);
                return (
                  <td key={`${day}-${slot}`} className="p-2 border border-slate-100 text-center">
                    {isAvailable ? (
                      <div className="h-8 w-full rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                        <span className="text-lg">✓</span>
                      </div>
                    ) : (
                      <div className="h-8 w-full rounded-lg bg-slate-50/50"></div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex gap-4 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-green-100 border border-green-200"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-slate-50 border border-slate-100"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
}
