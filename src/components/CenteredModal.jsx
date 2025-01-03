import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { DashboardIcons } from "../assets/Icons";
// import useStore from "../store/store";
export function CustomCenteredModal({
  open,
  size = "md",
  onClose,
  title = "Default Title",
  bodyContent = "Default body content goes here.",
  confirmText = "",
  cancelText = "",
  onConfirm,
  onCancel,
  style,
  infoIcon,
}) {
  // const {openCenteredModal, setCloseCenteredModal} = useStore();
  return (
    <Dialog open={open} size={size} handler={onClose} className="overflow-auto">
      <DialogHeader className="border-b-[1px] border-[#e5e5e5] py-4">
        <div className="flex justify-between w-full">
          <div className="text-[14px] font-poppins text-[#6f6f6f]" style={style}>
            <span className="mr-1">{infoIcon} </span> {title}
          </div>
          <div onClick={onClose} className="cursor-pointer">
            <DashboardIcons.cross />
          </div>
        </div>
      </DialogHeader>
      <DialogBody className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] lg:max-h-[80vh] overflow-y-auto">
        {bodyContent}
      </DialogBody>
      {confirmText && (
        <DialogFooter className="border-[1px] border-[#e5e5e5]">
          <Button
            variant="text"
            color="red"
            onClick={onCancel || onClose}
            className="mr-1"
          >
            <span>{cancelText}</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={onConfirm || onClose}
          >
            <span>{confirmText}</span>
          </Button>
        </DialogFooter>
      )}
    </Dialog>
  );
}
