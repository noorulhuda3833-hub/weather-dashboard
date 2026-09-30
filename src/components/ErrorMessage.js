export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="max-w-lg mx-auto mt-8 px-6">
      <p className="bg-red-100 text-red-700 border border-red-300 rounded-lg px-4 py-3 text-center">
        ⚠️ {message}
      </p>
    </div>
  );
}
