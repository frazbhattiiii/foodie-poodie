import React , { useState }                                                   from 'react';
import { motion }                                                             from 'framer-motion';
import { MdFastfood , MdCloudUpload , MdDelete , MdAttachMoney , MdFoodBank } from "react-icons/md";
import { categoriesData }                                                     from "../../data/MenuData";
import Loader                                                                 from "../common/Loader";
import { storage }                                                            from "../../config/firebase.config";
import { ref , uploadBytesResumable , getDownloadURL , deleteObject , }       from 'firebase/storage';
import { addItem , getAllFoodItems }                                          from "../../util/firebaseFunctions";
import {useNavigate}                                                          from 'react-router-dom';
import {actionType}                                                           from "../../context/reducer";
import {useStateValue}                                                        from "../../context/StateProvider";

function CreateContainer ( props ) {
    const [ title , setTitle ] = useState ( "" );
    const [ calories , setCalories ] = useState ( "" );
    const [ price , setPrice ] = useState ( "" );
    const [ category , setCategory ] = useState ( null );
    const [ imageAsset , setImageAsset ] = useState ( null );
    const [ fields , setFields ] = useState ( false );
    const [ alertStatus , setAlertStatus ] = useState ( "danger" );
    const [ msg , setMsg ] = useState ( null );
    const [ isLoading , setIsLoading ] = useState ( false );
    const navigate = useNavigate();
    const [{foodItems},dispatch] = useStateValue();
    const uploadImage = ( e ) => {
        setIsLoading ( true );
        const imageFile = e.target.files[ 0 ];
        const storageRef = ref ( storage , `images/${ Date.now () }-${ imageFile.name }` );
        const uploadTask = uploadBytesResumable ( storageRef , imageFile );

        uploadTask.on ( "state_changed" , ( snapshot ) => {
            const uploadProgress = (
                snapshot.bytesTransferred / snapshot.totalBytes
            ) * 100;
        } , ( error ) => {
            console.log ( error );
            setFields ( true );
            setMsg ( "Error while uploading : Try AGain 🙇" );
            setAlertStatus ( "danger" );
            setTimeout ( () => {
                setFields ( false );
                setIsLoading ( false );
            } , 4000 );
        } , () => {
            getDownloadURL ( uploadTask.snapshot.ref ).then ( ( downloadURL ) => {
                setImageAsset ( downloadURL );
                setIsLoading ( false );
                setFields ( true );
                setMsg ( "Image uploaded successfully 😊" );
                setAlertStatus ( "success" );
                setTimeout ( () => {
                    setFields ( false );
                } , 4000 );
            } );
        } );
    };
    const deleteImage = () => {
        setIsLoading ( true );
        const deleteRef = ref ( storage , imageAsset );
        deleteObject ( deleteRef ).then ( () => {
            setImageAsset ( null );
            setIsLoading ( false );
            setFields ( true );
            setMsg ( "Image deleted successfully 😊" );
            setAlertStatus ( "success" );
            setTimeout ( () => {
                setFields ( false );
            } , 4000 );
        } );
    };
    const saveDetails = () => {
    setIsLoading(true);
     try{
         if(!title || !calories || !price || !category || !imageAsset){
             setFields(true);
             setMsg("Please fill all the fields");
             setAlertStatus("danger");
             setTimeout(()=>{
                 setFields(false);
                 setIsLoading(false);
             },4000);
         }
         else{
             const data = {
                    id:`${Date.now()}`,
                    title,
                    calories,
                    price,
                    category,
                    qty:1,
                    imageURL : imageAsset
             }
                addItem ( data ).then (  r => {
                    setFields(true);
                    setMsg("Item added successfully");
                    setAlertStatus("success");
                    setTimeout(()=>{
                        setFields(false);
                        setIsLoading(false);
                        // navigate("/");
                    } , 4000);
                });
             clearData();

         }

     }catch(error){
            console.log(error);
            setFields(true);
            setMsg("Error while saving : Try Again 🙇");
            setAlertStatus("danger");
            setTimeout(() => {
                setFields(false);
                setIsLoading(false);

            }, 4000);
            fetchData();

     }
    }

    const clearData = () => {
        setTitle("");
        setImageAsset(null);
        setCalories("");
        setPrice("");
        setCategory("Select Category");
    };

    const fetchData = async () => {
        await getAllFoodItems().then((data) => {
            dispatch({
                         type: actionType.SET_FOOD_ITEMS,
                         foodItems: data,
                     });
        });
    };
    return (
        <>
            <div className='w-full min-h-screen h-auto flex items-center justify-center'>
                <div className='w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4 flex flex-col
            items-center justify-center gap-4'>
                    { fields && (

                        <motion.p
                            initial={ { opacity : 0 } }
                            animate={ { opacity : 1 } }
                            exit={ { opacity : 0 } }
                            className={ `w-full p-2 rounded-lg text-center text-lg font-semibold ${ alertStatus ===
                                                                                                    'danger' ? "bg-red-400 text-red-800" : "bg-emerald-400 text-emerald-800" }` }>
                            { msg }
                        </motion.p>
                    ) }
                    <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                        <MdFastfood className='text-xl text-gray-700'/>
                        <input
                            type={ 'text' }
                            required
                            value={ title }
                            placeholder={ 'Enter the title...' }
                            onChange={ ( e ) => setTitle ( e.target.value ) }
                            className='w-full h-full text-lg bg-transparent font-semibold
                    outline-none border-none placeholder:text-gray-400'
                        />
                    </div>
                    <div className={ 'w-full' }>
                        <select onChange={ ( e ) => setCategory ( e.target.value ) }
                                className={ 'outline-none w-full text-base border-b-2 border-gray-200 rounded-md p-2 cursor-pointer' }
                        >
                            <option value={ "other" } className={ 'bg-white' }>Select a category</option>
                            { categoriesData && categoriesData.map ( item => (
                                <option
                                    key={ item.id }
                                    value={ item.urlParamName }
                                    className={ 'bg-white text-base border-0 outline-none capitalize text-headingColor' }>
                                    { item.name }
                                </option>
                            ) ) }
                        </select>
                    </div>
                    <div
                        className={ 'group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg' }>
                        { isLoading ? <Loader/> : <>
                            { ! imageAsset ? (
                                <>
                                    <label
                                        className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                            <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700"/>
                                            <p className="text-gray-500 hover:text-gray-700">
                                                Click here to upload
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            name="uploadimage"
                                            accept="image/*"
                                            onChange={ uploadImage }
                                            className="w-0 h-0"
                                        />
                                    </label>
                                </>
                            ) : (
                                  <>
                                      <div className="relative h-full">
                                          <img
                                              src={ imageAsset }
                                              alt="uploaded image"
                                              className="w-full h-full object-cover"
                                          />
                                          <button
                                              type="button"
                                              className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                                              onClick={ deleteImage }
                                          >
                                              <MdDelete className="text-white"/>
                                          </button>
                                      </div>
                                  </>
                              ) }
                        </> }
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center gap-3">
                        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                            <MdFoodBank className="text-gray-700 text-2xl"/>
                            <input
                                type="text"
                                required
                                value={ calories }
                                onChange={ ( e ) => setCalories ( e.target.value ) }
                                placeholder="Calories"
                                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                            />
                        </div>

                        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                            <MdAttachMoney className="text-gray-700 text-2xl"/>
                            <input
                                type="text"
                                required
                                value={ price }
                                onChange={ ( e ) => setPrice ( e.target.value ) }
                                placeholder="Price"
                                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                            />
                        </div>
                    </div>
                    <div className="flex items-center w-full">
                        <button
                            type="button"
                            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold hover:shadow-md hover:bg-emerald-700 duration-200 transition-all ease-in-out"
                            onClick={ saveDetails }
                        >
                            Save
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CreateContainer;