"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui";
import { supabase } from "@/lib/supabase";

export type Field =
  | {
      kind: "text" | "email" | "tel";
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
    }
  | {
      kind: "select";
      name: string;
      label: string;
      required?: boolean;
      options: Array<{ value: string; label: string }>;
    }
  | {
      kind: "textarea";
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
      rows?: number;
    };

export function SimpleForm({
  title,
  subtitle,
  fields,
  submitLabel,
  tableName,
  successMessage = "Submitted successfully.",
  additionalData = {},
}: {
  title: string;
  subtitle?: string;
  fields: Field[];
  submitLabel: string;
  tableName?: string;
  successMessage?: string;
  additionalData?: Record<string, unknown>;
}) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""])),
  );
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    for (const f of fields) {
      const v = (values[f.name] ?? "").trim();
      if (f.required && v.length === 0) {
        e[f.name] = "This field is required.";
      }
      if (f.kind === "email" && v.length > 0 && !v.includes("@")) {
        e[f.name] = "Enter a valid email.";
      }
      if (f.kind === "tel" && v.length > 0 && v.replace(/\D/g, "").length < 10) {
        e[f.name] = "Enter a valid phone number.";
      }
    }
    return e;
  }, [fields, values]);

  const canSubmit = status !== "submitting" && Object.keys(errors).length === 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(Object.fromEntries(fields.map((f) => [f.name, true])));
    if (!canSubmit) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      if (tableName) {
        // Ensure ID is generated if not provided, to avoid DB null constraints
        const dataToInsert = { ...values, ...additionalData };
        if (!dataToInsert.id) {
          dataToInsert.id = crypto.randomUUID();
        }
        console.log("Inserting data to table", tableName, ":", dataToInsert);

        const { error } = await supabase
          .from(tableName)
          .insert([dataToInsert]);
        if (error) throw error;
      } else {
        // Mock delay for demo if no tableName provided
        await new Promise((r) => setTimeout(r, 600));
      }
      setStatus("success");
      setValues(Object.fromEntries(fields.map((f) => [f.name, ""])));
      setTouched({});
    } catch (err: unknown) {
      console.error("Form submission error details:", err);
      setStatus("error");
      let message = "An unexpected error occurred.";
      if (err instanceof Error) message = err.message;
      else if (typeof err === "object" && err !== null && "message" in err) {
        message = (err as any).message;
      }
      setErrorMessage(message);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-extrabold text-primary">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}

      {status === "success" ? (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-900">
          {successMessage}
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900">
          {errorMessage}
        </div>
      ) : null}

      <form className="mt-6 space-y-5" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {fields.map((f) => {
            const v = values[f.name] ?? "";
            const err = touched[f.name] ? errors[f.name] : undefined;
            const common = {
              name: f.name,
              value: v,
              onChange: (val: string) =>
                setValues((prev) => ({ ...prev, [f.name]: val })),
              onBlur: () => setTouched((prev) => ({ ...prev, [f.name]: true })),
            };

            if (f.kind === "textarea") {
              return (
                <label key={f.name} className="md:col-span-2 flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    {f.label}
                  </span>
                  <textarea
                    name={common.name}
                    rows={f.rows ?? 4}
                    required={f.required}
                    value={common.value}
                    onChange={(e) => common.onChange(e.target.value)}
                    onBlur={common.onBlur}
                    placeholder={f.placeholder}
                    className={`w-full resize-y rounded-lg border bg-white p-4 outline-none transition focus:ring-2 ${
                      err
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {err ? <span className="text-sm text-red-600">{err}</span> : null}
                </label>
              );
            }

            if (f.kind === "select") {
              return (
                <label key={f.name} className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    {f.label}
                  </span>
                  <select
                    name={common.name}
                    required={f.required}
                    value={common.value}
                    onChange={(e) => common.onChange(e.target.value)}
                    onBlur={common.onBlur}
                    className={`h-12 w-full rounded-lg border bg-white px-4 outline-none transition focus:ring-2 ${
                      err
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-primary focus:ring-primary/20"
                    }`}
                  >
                    <option value="">Select an option</option>
                    {f.options.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {err ? <span className="text-sm text-red-600">{err}</span> : null}
                </label>
              );
            }

            const inputType = f.kind;
            return (
              <label key={f.name} className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  {f.label}
                </span>
                <input
                  name={common.name}
                  type={inputType}
                  required={f.required}
                  value={common.value}
                  onChange={(e) => common.onChange(e.target.value)}
                  onBlur={common.onBlur}
                  placeholder={f.placeholder}
                  className={`h-12 w-full rounded-lg border bg-white px-4 outline-none transition focus:ring-2 ${
                    err
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-slate-300 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {err ? <span className="text-sm text-red-600">{err}</span> : null}
              </label>
            );
          })}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            className="h-12 w-full"
            disabled={!canSubmit}
          >
            {status === "submitting" ? "Submitting…" : submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}

