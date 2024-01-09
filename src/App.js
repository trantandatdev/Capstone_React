import { DatePicker } from "antd";

// react-router-dom
import { Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import MovieManager from "./pages/MovieManager/MovieManager";
import UserManager from "./pages/UserManager/UserManager";
import AddMovie from "./pages/AddMovie/AddMovie";
import Tickets from "./pages/Booking/Tickets";
import TicketProvider from "./pages/Booking/TicketsContext";

import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import AddUser from "./pages/AddUser/AddUser";
import EditUser from "./pages/EditUser/EditUser";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <TicketProvider>
        <Routes>
          <Route element={<UserTemplate />} path="/">                     
            <Route element={<HomePage />} index></Route>
          </Route>
          <Route element={<AdminTemplate />} path="/admin">
            <Route index element={<MovieManager />} />
            <Route path="manager-user" element={<UserManager />} />
            <Route path="add-movie" element={<AddMovie />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="edit-user/:taiKhoan" element={<EditUser />} />
          </Route>
          <Route element={<Login />} path="/login"></Route>
          
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Detail />} path="/detail/:maPhim"></Route>
          <Route element={<Tickets />} path="/tickets/:showtimeId" />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TicketProvider>
    </>
  );
}

export default App;
