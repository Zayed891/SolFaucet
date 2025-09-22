export function CardComponent({ children }) {
  return (
    <div className="relative w-xl mx-auto mt-6 ">
      <div className="absolute -inset-2  bg-gradient-to-b from-fuchsia-600 via-pink-600 to-gray-600 opacity-50 blur-2xl"></div>
      <div className="relative flex w-full h-64 items-center justify-center border border-zinc-700 rounded-3xl bg-zinc-900 text-slate-300">
        {children}
      </div>
    </div>
  );
}
