export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-black mt-3">Loading weather...</p>
    </div>
  );
}
