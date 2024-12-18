import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import UserList from "./pages/user/userList/userList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/consumer/login" element={<Login />} />
        <Route path="/public/v2/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
