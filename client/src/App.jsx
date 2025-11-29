import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route
            path="/"
            element={
              <h1 className="text-center mt-10 text-3xl">
                Welcome to the Blog App
              </h1>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
