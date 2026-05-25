export default function Loading() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-3xl bg-white h-96 border border-zinc-200"
        />
      ))}
    </div>
  );
}