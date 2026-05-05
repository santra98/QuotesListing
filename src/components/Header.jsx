export default function Header({ total }) {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(240,236,248,0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "#e8e3f5",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm"
              style={{ backgroundColor: "#7c6db0" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            <span
              className="text-xl font-semibold tracking-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#1e1a2e",
              }}
            >
              Quotara
            </span>
          </div>

          <p
            className="hidden md:block text-sm italic"
            style={{ color: "#a598cc", fontFamily: "Playfair Display, serif" }}
          >
            "Words that move the world"
          </p>

          {total > 0 && (
            <span
              className="text-xs font-medium px-3 py-1.5 rounded-full border"
              style={{
                backgroundColor: "#e8e3f5",
                borderColor: "#c8c0e4",
                color: "#5b4ea0",
              }}
            >
              {total} quotes
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
