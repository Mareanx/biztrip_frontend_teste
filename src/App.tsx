import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import { AuthGuard } from "./pages/AuthGuard";
import { globalStyles } from "./styles/globalCss";

function App() {
   globalStyles()
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
/*
function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("ACESS_TOKEN");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null;
}*/

export default App;
