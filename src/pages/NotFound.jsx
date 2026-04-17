export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-green-600">404</h1>
      <p className="text-gray-500 mt-2">Page Not Found</p>

      <a
        href="/"
        className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg"
      >
        Go Home
      </a>
    </div>
  );
}