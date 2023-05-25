import "./App.css";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import chef from './Assets/chef.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="NavDiv">
         
          <Link className="logo" to={"/"}>
          <img width={64} src={chef} alt=""/>
            Recipious</Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
