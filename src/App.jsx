import { useState, useEffect } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import SkeletonCard from "./components/SkeletonCard";

const API_URL = "https://api.freeapi.app/api/v1/public/quotes";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = () => {
    setError(null);
    setLoading(true);
    setQuotes([]);

    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        const items = json?.data?.data;
        if (!Array.isArray(items) || items.length === 0)
          throw new Error("No quotes");
        setQuotes(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load quotes. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0ecf8" }}>
      <Header total={quotes.length} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Loading */}
        {loading && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {Array(9)
              .fill(null)
              .map((_, i) => (
                <SkeletonCard key={i} />
              ))}
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-28 gap-5 text-center">
            <div className="text-6xl">📜</div>
            <div>
              <h3
                className="text-xl font-semibold mb-1"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#1e1a2e",
                }}
              >
                Could not load quotes
              </h3>
              <p className="text-sm" style={{ color: "#a598cc" }}>
                {error}
              </p>
            </div>
            <button
              onClick={load}
              className="px-6 py-2.5 text-sm font-medium rounded-full transition-colors text-white"
              style={{ backgroundColor: "#7c6db0" }}
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && quotes.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: "#1e1a2e",
                  }}
                >
                  Quotes Collection
                </h2>
                <p className="text-sm mt-0.5" style={{ color: "#a598cc" }}>
                  {quotes.length} quotes loaded
                </p>
              </div>
              <div
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: "#e8e3f5",
                  borderColor: "#c8c0e4",
                  color: "#5b4ea0",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                Quote Gallery
              </div>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
              {quotes.map((q, i) => (
                <QuoteCard key={q.id} quote={q} index={i} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm" style={{ color: "#a598cc" }}>
        <p>Powered by Quotara &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
