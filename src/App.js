import Header from "./components/Header/Header";
import NounForm from "./containers/NounForm/NounForm";
import CasesResult from "./containers/CasesResult/CasesResult";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <NounForm/>
      <CasesResult/>
      <Footer/>
    </div>
  );
}

export default App;
