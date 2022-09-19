import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactApp from "./components/ContactApp";
import ContactDetails from "./components/ContactDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<ContactApp />}/>
      <Route path="/contacts/:id" element={<ContactDetails />} />
    </Routes>
  </BrowserRouter>
);
export default App;
