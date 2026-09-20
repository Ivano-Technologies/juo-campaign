type FormStatus = {
  tone: "error" | "info";
  message: string;
};

export function FormStatusNote({ tone, message }: FormStatus) {
  const styles =
    tone === "error"
      ? "border-clay/40 bg-clay/10 text-clay"
      : "border-forest/20 bg-forest/5 text-forest";

  return (
    <p className={`rounded-xl border px-4 py-3 text-sm ${styles}`} role="status">
      {message}
    </p>
  );
}
