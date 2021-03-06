import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Resume from "../assets/Resume.png";

function ModalResume() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>View Resume</Button>}
    >
      <Modal.Content image>
        <img src={Resume} alt="Resume" style={{ height: "100%" }} />
      </Modal.Content>
    </Modal>
  );
}

export default ModalResume;
