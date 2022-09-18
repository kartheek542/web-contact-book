import Header from "./components/Header"
import Favourites from "./components/Favourites";
import ContactsList from "./components/ContactsList";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div>
        <Header />
        <Favourites />
        <ContactsList />
      </div>
    </div>
  );
}

export default App;
