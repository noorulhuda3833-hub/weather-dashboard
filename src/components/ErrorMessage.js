export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <p
      role="alert"
      className="rounded-xl border border-red-400/30 bg-red-950/40 px-5 py-4 text-red-200"
    >
      {message}
    </p>
  );
}
