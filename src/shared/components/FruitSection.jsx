import React , { useEffect , useState }  from 'react';
import { motion }                        from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer                      from "./RowContainer";
import { useStateValue }                 from "../../context/StateProvider";
import { getAllFoodItems }               from "../../util/firebaseFunctions";
import { actionType }                    from "../../context/reducer";
function FruitSection ( props ) {
    const [scrollValue, setScrollValue] = useState(0);
    const [{foodItems},dispatch] = useStateValue();
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
    }, []);
    useEffect ( () =>  {

    } , [ scrollValue ] );


    return (
        <section className={'w-full p-4 '}>
        <div className={'w-full flex items-center justify-between'}>
            <p className={'text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'}> Our Fresh & healthy fruits</p>
            <div className="hidden md:flex gap-3 items-center">
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                    onClick={() => setScrollValue(-200)}
                >
                    <MdChevronLeft className="text-lg text-white" />
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                    onClick={() => setScrollValue(200)}
                >
                    <MdChevronRight className="text-lg text-white" />
                </motion.div>
            </div>
        </div>
            <RowContainer
                scrollValue={scrollValue}
                flag={true}
                data={foodItems?.filter((n)=>n.category==='fruits')}/>


        </section>
    );
}

export default FruitSection;