// this is not html, this is jsx  ->  javaScript syntax extension
import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
function App() {
  let myvariable = 12;
  return (
    <>
      <Header title = "MyTodosList"/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
