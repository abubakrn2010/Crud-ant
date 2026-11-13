
import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

const Modal = ({ open, children }) => {
    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogContent sx={{ p: 3 }}>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal
