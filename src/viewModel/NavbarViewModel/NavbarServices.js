import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NavbarServices = () => {
    const [userProfile, setUserProfile] = useState(false);
    const [walletDropDown, setWalletDropDown] = useState(false);
    const [activeNavigation, setActiveNavigation] = useState(0);
    const dropdownRef = useRef(null);
    const [sharebalance, setShareBalance] = useState(false)
    const [viewHistory, setViewHistory] = useState(false)
    const [RechargeBalance, setRechargeBalance] = useState(false)
    const buttonRef = useRef(null);

    const navigate = useNavigate();

    const handleNavigation = (items, index) => {
        setActiveNavigation(index);
        navigate(items.path);
        setUserProfile(false);
        setWalletDropDown(false);
        if (index === 0) {
            setRechargeBalance(true);
        } else if (index === 2) {
            setShareBalance(true);
        } else if (index === 3) {
            setViewHistory(true);
        }
    };
    const handleNavbarNavigation = (items, index) => {
        setActiveNavigation(index);
        navigate(items.path);
        setUserProfile(false);
        setWalletDropDown(false);
    };

    const handleProfileNavigation = (item) => {
        navigate(item.path);
        setUserProfile(false);
    }
     const toggleDropdown = (event) => {
        event.stopPropagation(); // Prevent triggering the outside click handler
        setUserProfile((prev) => !prev);
      };
    return {
        toggleDropdown,
        buttonRef,navigate,
        handleProfileNavigation,
        handleNavigation,
        handleNavbarNavigation,
        walletDropDown, setWalletDropDown,
        userProfile, setUserProfile,
        activeNavigation, setActiveNavigation,
        dropdownRef,
        sharebalance, setShareBalance,
        viewHistory, setViewHistory,
        RechargeBalance, setRechargeBalance
    }
}

export default NavbarServices
