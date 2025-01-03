import React, { useState } from 'react'

const MySubscriptionServices = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [openEditPackage, setOpenEditPackage] = useState(false);
    const [autoRenew, setAutoRenew] = useState(false);
    return {
        startDate, setStartDate,
        openEditPackage, setOpenEditPackage,
        autoRenew, setAutoRenew
    }
}

export default MySubscriptionServices
