// Modal as a separate component
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

export const Modal = ({ openModal, closeModal, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className={styles.modal}>
      {children}
      {closeModal && <button onClick={closeModal}>Close</button>}
    </dialog>
  );
};
