import React, { useState } from 'react'

const ViewTrxSubsServices = () => {
    const [navigation, setNavigation] = useState(0)
    const [startDate, setStartDate] = useState(new Date());
    return {
        startDate, setStartDate,
        navigation, setNavigation

    }
}


export default ViewTrxSubsServices
