import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactApp from "./components/ContactApp";
import AddContact from "./components/AddContact";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<ContactApp />}/>
      <Route path="/contacts/add" element={<AddContact/>} />
    </Routes>
  </BrowserRouter>
);
export default App;
