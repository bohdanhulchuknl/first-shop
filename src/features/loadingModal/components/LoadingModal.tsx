import { Fragment } from "react";
//materialUI
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
//redux
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectIsOpen, toggleIsModalOpen } from "../loadingModalSlice";
//spinner
import { DotLoader } from "react-spinners";

interface DialogModalProps {}

export default function DialogModal({}: DialogModalProps) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpen);

  const handleToggleIsModalOpen = () => {
    dispatch(toggleIsModalOpen());
  };

  return (
    <Fragment>
      <Dialog
        open={isOpen}
        handler={() => {}}
        className="bg-transparent shadow-none mx-auto outline-none"
      >
        <DialogBody className="flex items-center justify-center">
          <DotLoader color="white" className="shadow-none" />
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
