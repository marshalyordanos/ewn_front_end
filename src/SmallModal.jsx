import { Button, Modal } from "antd";
import React from "react";

const SmallModal = ({ setModalOpen, modalOpen, children }) => {
  return (
    <div>
      <Modal
        title="Message"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        footer={[
          <Button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Ok
          </Button>,
        ]}
        onCancel={() => setModalOpen(false)}
      >
        {children}
      </Modal>
    </div>
  );
};

export default SmallModal;
