type FormStatus = {
  tone: "error" | "info";
  message: string;
};

export function FormStatusNote({ tone, message }: FormStatus) {
  const styles =
    tone === "error"
      ? "border-brand-red/40 bg-brand-red/10 text-brand-red"
      : "border-brand-blue/20 bg-brand-blue/5 text-brand-blue";

  return (
    <p className={`rounded-xl border px-4 py-3 text-sm ${styles}`} role="status">
      {message}
    </p>
  );
}
