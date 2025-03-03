import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import PageLayout from "./PageLayout";
import {ArchiveProvider } from "./ArchiveData";

function App() {


  // useEffect(() => {
  //   document.body.style.backgroundColor = changeModel
  //     ? "rgb(251, 246, 234)"
  //     : "rgb(0,0,0,0.900)";
  // }, [changeModel]); //條背景顏色

  return (
    <BrowserRouter>
      <ArchiveProvider>
      <Header />
      <Routes>
        <Route path="/*" element={<PageLayout />} />
      </Routes>
      <Footer />
      </ArchiveProvider>
    </BrowserRouter>
  );
}

export default App;
