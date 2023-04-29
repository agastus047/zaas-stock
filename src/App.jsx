import './App.css'
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; 
import Graph from './components/Graph';

function App() {

  return (
    <div className='p-5'>
      <Graph />
      <div className='my-10 flex justify-center gap-5'>
        <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
          <span className='pi pi-cart-plus'></span> Buy
        </button>
        <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
          <span className='pi pi-dollar'></span> Sell
        </button>
      </div>
    </div>
  )
}

export default App
