const TAG_COLORS = [
  { bg: "#e8e3f5", text: "#5b4ea0", border: "#c8c0e4" },
  { bg: "#ede9fb", text: "#4338ca", border: "#c7d2fe" },
  { bg: "#f3e8ff", text: "#6b21a8", border: "#e9d5ff" },
  { bg: "#eef2ff", text: "#3730a3", border: "#c7d2fe" },
  { bg: "#fdf4ff", text: "#7e22ce", border: "#e9d5ff" },
  { bg: "#f5f3ff", text: "#4c1d95", border: "#ddd6fe" },
];

function getTagColor(tag) {
  let h = 0;
  for (let i = 0; i < tag.length; i++) h = tag.charCodeAt(i) + ((h << 5) - h);
  return TAG_COLORS[Math.abs(h) % TAG_COLORS.length];
}

function formatDate(d) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function QuoteCard({ quote, index = 0 }) {
  const delay = Math.min(index, 11) * 60;

  const handleCopy = () => {
    navigator.clipboard?.writeText(`"${quote.content}" — ${quote.author}`);
  };

  return (
    <div
      className="break-inside-avoid mb-5 rounded-2xl border group relative overflow-hidden
                 opacity-0 animate-fade-up transition-all duration-300"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        backgroundColor: "#ffffff",
        borderColor: "#e8e3f5",
        boxShadow: "0 1px 4px rgba(30,26,46,0.06)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 8px 28px rgba(124,109,176,0.18)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 1px 4px rgba(30,26,46,0.06)")
      }
    >
      <div className="h-1 w-full" style={{ backgroundColor: "#7c6db0" }} />

      <div className="p-5 sm:p-6">
        <div
          className="text-6xl leading-none mb-2 select-none"
          style={{
            fontFamily: "Georgia, serif",
            color: "#e8e3f5",
            lineHeight: 1,
          }}
        >
          ❝
        </div>

        {/* Quote content */}
        <p
          className="text-base leading-relaxed mb-4 italic"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#1e1a2e",
            fontSize: "1.05rem",
          }}
        >
          {quote.content}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
            style={{ backgroundColor: "#7c6db0" }}
          >
            {quote.author?.charAt(0).toUpperCase() ?? "?"}
          </div>
          <p className="text-sm font-semibold" style={{ color: "#2d2550" }}>
            {quote.author}
          </p>
        </div>

        {quote.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {quote.tags.map((tag) => {
              const c = getTagColor(tag);
              return (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: c.bg,
                    color: c.text,
                    borderColor: c.border,
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}

        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: "#f0ecf8" }}
        >
          <div
            className="flex items-center gap-3 text-xs"
            style={{ color: "#a598cc" }}
          >
            <span className="font-mono">#{quote.id}</span>
            <span>{quote.length} chars</span>
            {quote.dateAdded && (
              <span className="hidden sm:inline">
                {formatDate(quote.dateAdded)}
              </span>
            )}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                       transition-all duration-150 opacity-0 group-hover:opacity-100"
            style={{ backgroundColor: "#e8e3f5", color: "#5b4ea0" }}
            title="Copy quote"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
