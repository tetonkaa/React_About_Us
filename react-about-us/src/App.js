import { Route, Routes, Link } from "react-router-dom"
import Angel from './pages/Angel'
import Kai from './pages/Kai'
import Michael from './pages/Michael'
import Shavon from './pages/Shavon'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Group 3</h1>
      <main>
        <Routes>
          <Route path="/angel" element={<Angel />}></Route>
          <Route path="/kai" element={<Kai />}></Route>
          <Route path="/michael" element={<Michael />}></Route>
          <Route path="/shavon" element={<Shavon />}></Route>
        </Routes>
      </main>
      <div class="snowflakes" aria-hidden="true">
          
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
            ❄
          </div>
          <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
    </div>
  );
}

export default App;
