import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { MoviesListContextProvider } from "./store/MoviesListData";

function App() {
  return (
    <MoviesListContextProvider>
      <main className="relative">
        <Header />
        <section className="padding">
          <Outlet />
        </section>
      </main>
    </MoviesListContextProvider>
  );
}

export default App;
