import React, { useState } from 'react'

const NavbarServices = () => {
    const [userProfile, setUserProfile] = useState(false);
    const [addBalance, setUserBalance] = useState(false);
    const [activeNavigation, setActiveNavigation] = useState(0);
    return {
        addBalance, setUserBalance,
        userProfile, setUserProfile,
        activeNavigation, setActiveNavigation,
    }
}

export default NavbarServices
