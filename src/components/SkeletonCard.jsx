export default function SkeletonCard() {
  return (
    <div
      className="break-inside-avoid mb-5 rounded-2xl border overflow-hidden"
      style={{ backgroundColor: "#ffffff", borderColor: "#e8e3f5" }}
    >
      <div className="h-1 w-full" style={{ backgroundColor: "#e8e3f5" }} />
      <div className="p-5 sm:p-6">
        <div
          className="h-10 w-8 rounded-lg mb-3"
          style={{
            backgroundColor: "#f0ecf8",
            animation: "pulse 1.5s ease infinite",
          }}
        />
        <div className="space-y-2 mb-4">
          <div
            className="h-3.5 rounded-full"
            style={{
              backgroundColor: "#f0ecf8",
              width: "100%",
              animation: "pulse 1.5s ease infinite",
            }}
          />
          <div
            className="h-3.5 rounded-full"
            style={{
              backgroundColor: "#f0ecf8",
              width: "88%",
              animation: "pulse 1.5s ease infinite 0.1s",
            }}
          />
          <div
            className="h-3.5 rounded-full"
            style={{
              backgroundColor: "#f0ecf8",
              width: "72%",
              animation: "pulse 1.5s ease infinite 0.2s",
            }}
          />
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-7 h-7 rounded-full"
            style={{
              backgroundColor: "#e8e3f5",
              animation: "pulse 1.5s ease infinite",
            }}
          />
          <div
            className="h-3 w-28 rounded-full"
            style={{
              backgroundColor: "#e8e3f5",
              animation: "pulse 1.5s ease infinite 0.1s",
            }}
          />
        </div>
        <div className="flex gap-2 mb-4">
          <div
            className="h-5 w-16 rounded-full"
            style={{
              backgroundColor: "#e8e3f5",
              animation: "pulse 1.5s ease infinite",
            }}
          />
          <div
            className="h-5 w-20 rounded-full"
            style={{
              backgroundColor: "#e8e3f5",
              animation: "pulse 1.5s ease infinite 0.1s",
            }}
          />
        </div>
        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: "#f0ecf8" }}
        >
          <div className="flex gap-3">
            <div
              className="h-3 w-8 rounded-full"
              style={{
                backgroundColor: "#e8e3f5",
                animation: "pulse 1.5s ease infinite",
              }}
            />
            <div
              className="h-3 w-16 rounded-full"
              style={{
                backgroundColor: "#e8e3f5",
                animation: "pulse 1.5s ease infinite 0.1s",
              }}
            />
          </div>
          <div
            className="h-7 w-14 rounded-lg"
            style={{
              backgroundColor: "#e8e3f5",
              animation: "pulse 1.5s ease infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
