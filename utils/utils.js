// import { useEffect, useState, useContext} from 'react'
// import {GlobalContext} from ".././src/context/GlobalState"

// const { vehicles, businessPoint, locations } = useContext(GlobalContext)

// const DataVehicle = () => {

//     const [allVehicle, setAllVehicle] = useState();

    
//    useEffect(()=>{
//         const getVehicle = async () => { 
//                 const { data } = await api.get('/vehicles')
//                 if(data.success){       
//                     setAllVehicle(data.data)
//                     console.log(data.data)
//                 }
//         }
//         getVehicle()
//         return () => { 
//             getVehicle
//         }
//     }, [vehicles, allV])

    
// }

// const DataLocations= () => {
//     const [allLocations, setAllLocations] = useState();

//     useEffect(()=>{
//         const getAllLocation = async () => { 
//                 const { data } = await api.get('/locations')
//                 if(data.success){       
//                     setAllLocations(data.data)
//                     console.log(data.data)
//                 }
//         }
//         getAllLocation ()
//         return () => { 
//             getAllLocation 
//         }
//     }, [locations])
// }

// const DataBusinessPoint = () => {
//     const { vehicles, businessPoint, locations } = useContext(GlobalContext)
//     const [allBusinessPoint, setAllBusinessPoint] = useState();

//     useEffect(()=>{
//         const getAllBusinessPoint = async () => { 
//                 const { data } = await api.get('/business-points')
//                 if(data.success){       
//                     setAllBusinessPoint(data.data)
//                     console.log(data.data)
//                 }
//         }
//         getAllBusinessPoint ()
//         return () => { 
//             getAllBusinessPoint 
//         }
//     }, [businessPoint])
//     return {allBusinessPoint}
// }
// export { DataBusinessPoint };