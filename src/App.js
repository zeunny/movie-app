import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

// npm install react-router-dom
function App() {
  return (
    // github pages에 에 올릴 때는 HashBrowser를 사용하는 것이 좋음
    // '#'을 없애고 싶으면 BrowserRouter를 사용하면 됨
    <BrowserRouter>
      <Navigation />
      {/* exact 는 이 path가 아니면 렌더링 하지 않는다는 뜻
      (없으면 /about 에 가면 Home이랑 About이 둘 다 렌더링 됨) */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
