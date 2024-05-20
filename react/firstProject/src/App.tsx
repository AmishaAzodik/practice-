import PrimarySearchAppBar from "./Components/AppBar";
import "./App.css";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <SideBar />
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
