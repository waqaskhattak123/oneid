import React, { useState } from 'react'

const LoginServices = () => {
    const [activeButton, setActiveButton] = useState(0)
    return {
        activeButton, setActiveButton
    }
}

export default LoginServices
