export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="w-48 h-32 rounded-xl bg-gray-200 animate-pulse" />
      <div className="w-64 h-4 rounded-full bg-gray-200 animate-pulse" />
      <div className="w-48 h-4 rounded-full bg-gray-200 animate-pulse" />
    </div>
  )
}
