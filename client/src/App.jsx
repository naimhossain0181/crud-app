import { BrowserRouter, Routes, Route  } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadPage />} />
          <Route path="/create" element={<CreatePage></CreatePage>}></Route>
          <Route path="/update/:id" element={<UpdatePage></UpdatePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
