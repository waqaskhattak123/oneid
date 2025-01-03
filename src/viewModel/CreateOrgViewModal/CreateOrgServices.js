import { useState } from "react";

const CreateOrgServices = () => {
    const [openCreateOrg, setOpenCreateOrg] = useState(false);
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);


    return {
        openCreateOrg,
        setOpenCreateOrg,
        isClearable, setIsClearable,
        isSearchable, setIsSearchable,
        isDisabled, setIsDisabled,
        isLoading, setIsLoading,
        isRtl, setIsRtl,
    }
}
export default CreateOrgServices