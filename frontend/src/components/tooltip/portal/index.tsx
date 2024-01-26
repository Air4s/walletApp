import React, { useRef, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  children?: ReactNode;
}

const Portal: React.FC<IProps> = ({ children }) => {
  const popUpRef = useRef(document.createElement('div'));

  useEffect(() => {
    const current = popUpRef.current;

    document.body.appendChild(current);
    return () => void document.body.removeChild(current);
  }, []);

  return ReactDOM.createPortal(children, popUpRef.current);
};

export default Portal;