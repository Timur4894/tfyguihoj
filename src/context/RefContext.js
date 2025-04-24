import React, { createContext, useState } from 'react';

export const RefContext = createContext();

export const RefProvider = ({ children }) => {
    const [partnerData, setPartnerData] = useState({
        partnersInvited: 0,
        activePartners: 0,
        earningsFromPartners: 0,
    });

    const updatePartnerData = (data) => setPartnerData(data);

    return (
        <RefContext.Provider value={{ partnerData, updatePartnerData }}>
            {children}
        </RefContext.Provider>
    );
};
