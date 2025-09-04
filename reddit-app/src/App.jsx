import Header from "./components/Header/Header"
import Subreddits from "./components/Subreddits/Subreddits"
import PostList from "./components/PostList/PostList"
import "../src/App.css"

export default function App() {
  return (
    <div>
      <Header />

      <div className="page-layout">
        <main className="content">
          <PostList />
        </main>

        <aside className="sidebar">
          <Subreddits />
        </aside>
      </div>
    </div>
  );
}
