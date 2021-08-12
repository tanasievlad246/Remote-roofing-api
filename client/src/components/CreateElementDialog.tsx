import { Dialog } from "@material-ui/core";
import { useState } from "react";

interface CreateElementProps {
    open: boolean,
    handleClose: () => void,
    handleOpen: () => void
}

const CreateElementDialog: React.FC = ({ open, handleClose, handleOpen }: CreateElementProps) => {
    return <Dialog>

    </Dialog>
}

export default CreateElementDialog;