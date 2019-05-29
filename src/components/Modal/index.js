import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import styles from './modal.css';

const Modal = ({
  title,
  titleClass,
  text,
  actionButtons,
  modalDismiss,
  children,
  open,
  size,
  textClass,
  showCloseButton,
  showTextIcon,
  accessButtons,
  greenButton,
  errorButton,
  success,
}) => {
console.log("dismiss: ",modalDismiss);
console.log("open: ",open);
return(
  createPortal(
    <div
      className={cn(
        !open ? styles.hide : styles.modalContainer,
      )}
      onClick={() => modalDismiss}
      onKeyDown={() => modalDismiss}
      role="presentation"

    >
      <div
        className={cn(
          styles.modalContent,
          styles[size],
        )}
        onClick={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
        role="presentation"
      >
        <div className={cn(
          titleClass ? styles[titleClass] : styles.modalTitle,
        )}
        >
          <span>
            {title}
          </span>
        </div>
        <div className={styles.modalBody}>
          <Fragment>
            {children}
          </Fragment>
          <div
            className={cn(
              textClass ? styles[textClass] : null,
            )}
          >
            {showTextIcon ? (
              <div
                className={cn(
                  styles.svgTextIcon,
                )}
              >
              </div>
            ) : null}
            <span>
              {text}
            </span>
          </div>
        </div>
        <div className={cn(
          greenButton ? styles.greenButton : null,
          accessButtons ? styles.accessButtons : styles.modalButtons,
          errorButton ? styles.errorButton : null,
        )}
        >
          {actionButtons}
        </div>

      </div>

    </div>,
    document.getElementById('modal'),
  )
);
        }

export default Modal;
