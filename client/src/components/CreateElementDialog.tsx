import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, TextField, Button } from "@material-ui/core";
import { useState } from "react";

interface CreateElementProps {
    open: boolean,
    handleClose: () => void,
    handleOpen: () => void
}

const CreateElementDialog: React.FC<CreateElementProps> = ({ open, handleClose, handleOpen }: CreateElementProps) => {
    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Create Element</DialogTitle>
        <DialogContent>
            <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Subscribe
            </Button>
        </DialogActions>
    </Dialog>
}

export default CreateElementDialog;