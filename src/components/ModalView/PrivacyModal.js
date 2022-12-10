import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "@huksley/react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            POLICY TEXT HERE MY BOYYYY
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
                
            </Modal>
        </>
    );
};

export default PrivacyModal;
