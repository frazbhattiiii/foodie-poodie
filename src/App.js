import './App.css';
import { Header , Hero } from "./shared/components";
import {AnimatePresence} from "framer-motion";
import {Route,Routes }   from 'react-router-dom';

function App() {
  return (
      <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
         <Header/>
          <main className='mt-16 md:mt-20 px-4 md:px-16 py-4 w-full'>
                <Routes>
                    <Route path='/*' element={<Hero />}/>
                </Routes>
          </main>
      </div>
      </AnimatePresence>
  );
}

export default App;
