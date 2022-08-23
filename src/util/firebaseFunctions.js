import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
} from "firebase/firestore";
import { firestore }    from "../config/firebase.config";

export const addItem = async ( item ) => {
    await setDoc ( doc ( firestore , 'foodItems' , `${ Date.now () }`), item ,{
        merge:true,
    } )
}
// getall food items
export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );

    return items.docs.map((doc) => doc.data());
};