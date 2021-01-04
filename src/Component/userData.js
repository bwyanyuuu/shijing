import React from 'react';
import{ createContext, useState} from "react";

export const StoreProvider = ({ children }) => {  
    const [me, setMe] = useState(meData);
    const [locations, setlocations] = useState(locationData.locationList);
    const [contact, setcontact] = useState(contactData.contactList);
    const [isLogin, setIsLogin] = useState(false);
    const [ordernum,setordernum]=useState(0);
    const store ={
        meState: [me, setMe],
        locationsState:[locations, setlocations],
        contactState:[contact, setcontact],
        isLoginState: [isLogin, setIsLogin],
        ordernumState:[ordernum,setordernum]
    };
    return (
        <StoreContext.Provider value={store}>
           {children}
        </StoreContext.Provider>
       );
};