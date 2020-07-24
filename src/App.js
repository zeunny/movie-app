import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

// npm install react-router-dom
function App() {
  return (
    <HashRouter>
      {/* exact 는 이 path가 아니면 렌더링 하지 않는다는 뜻
      (없으면 /about 에 가면 Home이랑 About이 둘 다 렌더링 됨) */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
