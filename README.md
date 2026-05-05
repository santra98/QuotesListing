# Quotara

Quotara is a small quote gallery built with React and Vite. It pulls quotes from a public API and lays them out in a clean, card-based interface that feels light and a little editorial. The goal of the app is simple: load interesting quotes, make them easy to browse, and let people copy the ones they like without friction.

## What the app does

When the app loads, it requests quote data from `https://api.freeapi.app/api/v1/public/quotes`. If the request works, the quotes appear in a responsive multi-column layout. If it fails, the user sees a friendly error message and a retry button instead of a broken screen.

Each quote card shows:

- the quote text
- the author
- any available tags
- a few small bits of metadata like quote id, length, and date
- a copy button for quickly saving the quote to the clipboard

The copy action now gives clear feedback. After a user clicks the button, it briefly changes to `Copied` with a success-style look, so there’s no guessing about whether it worked.

## Main pieces of the app

### `src/App.jsx`

This is where the main app logic lives.

- It fetches quotes from the API.
- It keeps track of `loading`, `error`, and `quotes` state.
- It decides whether the user should see skeleton cards, an error state, or the final gallery.

If you want to change how data is loaded or how the app reacts to API failures, this is the first file to check.

### `src/components/Header.jsx`

This component handles the top bar of the app.

- It shows the `Quotara` brand.
- It displays a short tagline on larger screens.
- It shows the number of loaded quotes once data is available.

### `src/components/QuoteCard.jsx`

This is the heart of the UI. Each quote card is rendered here.

- The quote text is the main focus.
- Author information is shown underneath.
- Tags are rendered as colored pills.
- Metadata appears at the bottom.
- The copy button lives here too.

This component also handles the small copied-state interaction that gives the user visual confirmation after clicking the copy button.

### `src/components/SkeletonCard.jsx`

This component is only shown while data is loading. It mirrors the shape of a real quote card so the page doesn’t jump around while content is coming in.
