import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Recommended from './components/Recommended/Recommended';
import Products from './components/products/Products';

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
    </>
  )
}

export default App;