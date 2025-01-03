import { useState } from 'react'

const DashboardServices = () => {
    const [activeNavigation, setActiveNavigation] = useState(0);
    const [manageSubscriptions, setManageSubscriptions] = useState(false);
    return {
        activeNavigation, setActiveNavigation,
        manageSubscriptions, setManageSubscriptions
    }
}

export default DashboardServices
