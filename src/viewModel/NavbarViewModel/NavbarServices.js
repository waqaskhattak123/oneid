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
    const profileButtonRef = useRef(null);
    const walletDropDownRef = useRef(null);
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
        // console.log(items);
        setActiveNavigation(index);
        navigate(items.path);
        setUserProfile(false);
        setWalletDropDown(false);
    };

    const handleProfileNavigation = (item) => {
        navigate(item.path);
        setUserProfile(false);
    }
     const toggleProfileMenu = (event) => {
        event.stopPropagation(); // Prevent triggering the outside click handler
        setUserProfile((prev) => !prev);
        
      };
     const toggleWalletMenu = (event) => {
        event.stopPropagation(); // Prevent triggering the outside click handler
        setWalletDropDown((prev) => !prev);
        
      };
    return {
        walletDropDownRef,
        toggleWalletMenu,
        toggleProfileMenu,
        profileButtonRef,navigate,
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
