import React from "react";
import styles from "./PokemonDetailsModal.module.css";

interface PokemonDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: JSX.Element;
}

const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
};

export default PokemonDetailsModal;
