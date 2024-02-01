import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesCardContainer from "./components/MoviesCardContainer.jsx";
import MovieSummary from "./components/MovieSummary.jsx";
import BookTicketsForm, {
  bookTicketSubmit,
} from "./components/BookTicketsForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MoviesCardContainer /> },
      {
        path: "/movie-info",
        element: <MovieSummary />,
      },
      {
        path: "/movie-info/book-tickets",
        element: <BookTicketsForm />,
        action: bookTicketSubmit,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
