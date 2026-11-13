
import React from 'react'
import { Modal } from 'antd'

const MyModal = ({ open, children }) => {
    return (
        <Modal open={open} footer={null}>
            {children}
        </Modal>
    )
}

export default MyModal
