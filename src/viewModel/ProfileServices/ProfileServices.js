import React, { useState } from 'react'

const ProfileServices = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return {
        open, handleOpen,

    }
}

export default ProfileServices
