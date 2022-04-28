import './App.css';
import Lista from "./components/Lista"

function App() {
  return (
    <div className="container">
      <h1 class="my-class">Hello Dojo!</h1>
      <h2 class="my-class">Things I need to do:</h2>
                
      <section>
        <Lista></Lista>
      </section>
    </div>
  );
}

export default App;
