import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<PostList />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
