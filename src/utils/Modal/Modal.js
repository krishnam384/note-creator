import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const ModalOverlay = (props) => {
  console.log(props);
  const content = (
    <div
      style={{
        zIndex: 100,
        position: "fixed",
        top: "22vh",
        left: "20%",
        width: "50%",
        background: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        borderRadius: "8px",
      }}
    >
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>

    // <div
    //   style={{
    //     zIndex: 100,
    //     position: "fixed",
    //     top: "22vh",
    //     left: "10%",
    //     width: "80%",
    //     background: "white",
    //     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
    //     borderRadius: "8px",
    //   }}
    // >
    //   <p>{props.header}</p>
    // </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool,
  onCancel: PropTypes.func,
};
