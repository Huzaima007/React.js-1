import { Route, Routes } from "react-router";
import "./App.css";
import Form from "./components/Form";
import Detail from "./components/Detail";
import Basic from "./components/Formik";

function App() {
  return (
    <Routes>
      <Route index element={<Form />} />
      <Route path="detail" element={<Detail />} />
      <Route path="basic" element={<Basic />} />
    </Routes>
  );
}

export default App;
