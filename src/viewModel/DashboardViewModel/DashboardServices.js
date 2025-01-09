import { useState } from 'react'

const DashboardServices = () => {
    const [activeNavigation, setActiveNavigation] = useState(0);
    const [manageSubscriptions, setManageSubscriptions] = useState(false);
    const [subscribeApp ,setSubscribeApp] = useState(false)
    return {
        activeNavigation, setActiveNavigation,
        manageSubscriptions, setManageSubscriptions,
        subscribeApp, setSubscribeApp
    }
}

export default DashboardServices
