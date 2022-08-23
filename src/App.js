import './App.css';
import { Header}           from "./shared/components";
import {AnimatePresence}   from "framer-motion";
import {Route,Routes }     from 'react-router-dom';
import Home                from "./Pages/Home";
import CreateItem          from "./Pages/CreateItem";
import { useStateValue }   from "./context/StateProvider";
import { getAllFoodItems } from "./util/firebaseFunctions";
import { useEffect }       from "react";
import { actionType }      from "./context/reducer";

function App() {
    const [{},dispatch] = useStateValue();

    const fetchData = async () => {
        await getAllFoodItems().then(items => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems : items
            });
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
  return (
      <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
         <Header/>
          <main className='mt-16 md:mt-20 px-4 md:px-16 py-4 w-full'>
                <Routes>
                    <Route path='/*' element={<Home />}/>
                    <Route path='/create-item' element={<CreateItem/>}/>
                </Routes>
          </main>
      </div>
      </AnimatePresence>
  );
}

export default App;
