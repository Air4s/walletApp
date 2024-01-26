import { useEffect } from 'react';
import { IOutsideDetectorProps } from '../../interfaces/common/common';

export function useOutsideDetector({ref, callback}: IOutsideDetectorProps) {
  useEffect(() => {


    //  Alert if clicked on outside of element

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
  
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
      
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}