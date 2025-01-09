import React, { useState } from 'react'

const MyInvoiceServices = () => {
    const [navigation, setNavigation] = useState(0)
    const [showIndividualInvoice, setShowIndividualInvoice] = useState(false)
    const [cancelOrder, setCancelOrder] = useState(false)
    const [payInvoice, setPayInvoice] = useState(false)
    return {
        navigation, setNavigation,
        showIndividualInvoice, setShowIndividualInvoice,
        cancelOrder, setCancelOrder,
        payInvoice, setPayInvoice,
    }
}

export default MyInvoiceServices
