import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { MoviesListContextProvider } from "../store/MoviesListData";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <MoviesListContextProvider>
      <main className="relative">
        <Header />
        <section className="padding">
          <Outlet />
          <SpeedInsights />
        </section>
      </main>
    </MoviesListContextProvider>
  );
}

export default App;
