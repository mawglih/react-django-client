import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import styles from './modal.css';

const Modal = ({
  title,
  text,
  actionButtons,
  titleClass,
  modalDismiss,
  open,
  children,
}) => {
  createPortal (
    <div
      className={cn(
        !open ? styles.hide : styles.modalContainer,
      )}
      onClick={modalDismiss}
      role="presentation"
    >
      <div
        className={cn(
          styles.modalContent,
        )}
        onClick={e => e.stopPropagation()}
        role="presentation"
      >
        <div className={cn(
          titleClass ? styles[titleClass] : styles.modalTitle
        )}>
          <span>
            {title}
          </span>
        </div>
        <div className={styles.modalBody}>
          <Fragment>{children}</Fragment>
          <span>{text}</span>
        </div>
        <div>
          {actionButtons}
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  )
};

export default Modal;
