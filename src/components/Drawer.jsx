import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";

const CustomDrawer = ({
  open,
  onClose,
  placement,
  title,
  bodyContent,
  size,
}) => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4"></div>
      <Drawer
        placement={placement}
        open={open}
        onClose={onClose}
        className="p-4"
        size={size}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          {bodyContent}
        </Typography>
        {/* <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div> */}
      </Drawer>
    </React.Fragment>
  );
};

export default CustomDrawer;
