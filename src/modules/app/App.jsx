import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "../../components/Layout/Layout.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import UserGithubPage from "../../pages/UserGithubPage/UserGithubPage.jsx";
import NoMatchPage from "../../pages/NoMutchPage/NoMatchPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=":username" element={<UserGithubPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
