import { Routes, Route } from "react-router-dom";
import { Layout, NoMatch } from "./components";
import { Airdrop, Trending, Explore, Accounts, TopFee } from "./pages";
export default function App() {
  return (
    <main className="p-3 md:p-6">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accounts />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/top-fee" element={<TopFee />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/airdrop" element={<Airdrop />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </main>
  );
}
