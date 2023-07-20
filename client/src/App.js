import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Counter from './pages/Counter.jsx';
import Addmeal from './pages/Addmeal.jsx';
import Navbar from './components/Header/Navbar.jsx';
import Feature from './components/Header/Featurebar.jsx';
import Report from './pages/Report.jsx';
import Recipe from './pages/Recipe.jsx';
import Register from './pages/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
              <Feature />
            </ProtectedRoute>
          }
        >
          <Route index element={<Counter />} />
          <Route path="addmeal/:mealTime" element={<Addmeal />} />
          <Route path="report" element={<Report />} />
          <Route path="recipe" element={<Recipe />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
