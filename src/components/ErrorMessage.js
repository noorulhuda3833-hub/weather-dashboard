export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="max-w-md mx-auto mt-6 px-6">
      <p className="text-sm text-red-600 text-center border border-red-300 bg-red-50 rounded-lg px-4 py-3">
        {message}
      </p>
    </div>
  );
}
