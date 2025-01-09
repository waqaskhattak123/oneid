import React, { useState } from 'react'

const RechargeBalanceServices = () => {
    const [activeNavigation, setActiveNavigation] = useState(0)
    const [easypisaWallet, setEasypisaWallet] = useState(0)
    const [jazzcashWallet, setJazzCashWallet] = useState(0)
    const [directDeposit, setDirectDeposit] = useState(0)
    return {
        activeNavigation, setActiveNavigation,
        easypisaWallet, setEasypisaWallet,
        jazzcashWallet, setJazzCashWallet,
        directDeposit, setDirectDeposit

    }
}

export default RechargeBalanceServices
