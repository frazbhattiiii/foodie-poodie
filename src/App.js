import './App.css';
import { Header} from "./shared/components";
import {AnimatePresence} from "framer-motion";
import {Route,Routes }   from 'react-router-dom';
import Home              from "./Pages/Home";

function App() {
  return (
      <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
         <Header/>
          <main className='mt-16 md:mt-20 px-4 md:px-16 py-4 w-full'>
                <Routes>
                    <Route path='/*' element={<Home />}/>
                </Routes>
          </main>
      </div>
      </AnimatePresence>
  );
}

export default App;
