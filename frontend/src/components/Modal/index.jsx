import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import './styles.css';

function Modal() {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState(null);
  const [resolve, setResolve] = useState(null);

  Object.assign(Modal, {
    async show(data) {
      return new Promise((r) => {
        setVisible(true);
        setOptions(data);
        setResolve({ fn: r });
      });
    },
    close(data) {
      typeof data === 'function' ? resolve.fn(data()) : resolve.fn(data);
      setVisible(false);
    },
  });

  return (
    visible && (
      <section
        id="screen"
        onMouseDown={(e) => e.target.id === 'screen' && Modal.close()}
      >
        <div onClick={() => null}>
          <header>
            <h3>{options.title}</h3>
            <MdClose onClick={() => Modal.close()} />
          </header>
          <div>
            {options.content}
            {options.cta && (
              <button onClick={() => Modal.close(options.resolver)}>
                {options.cta}
              </button>
            )}
          </div>
        </div>
      </section>
    )
  );
}

export default Modal;
