import { createContext, useState, useContext } from "react";

const bookingContext = createContext(undefined);

export const  bookingProvider =({children})=>{
    const [bookingList, setBookingList] = useState([]);

    return (<bookingContext.Provider value={{bookingList, setBookingList}}>
        {children}
    </bookingContext.Provider>)
}
export const useBooking = () =>  useContext(bookingContext);
