import React, { useState } from 'react'

const LoginHomeServices = () => {
    const [activeButton, setActiveButton] = useState(0);
    return {
        activeButton, setActiveButton
    }
}

export default LoginHomeServices
