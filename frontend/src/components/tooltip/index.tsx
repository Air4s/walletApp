import React, { useEffect, useRef, useState } from 'react';
import { Popover } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import Portal from './portal';
import { useOutsideDetector } from '../hooks/common';


interface IProps {
  children?: React.ReactNode;
  tooltipText: string;
  position?: 'top' | 'bottom' | 'auto';
  className?: string;
  disabled?: boolean
  space?: number;
  open?: boolean;
}

const Tooltip: React.FC<IProps> = ({ 
  children, 
  tooltipText, 
  position = 'bottom',
  className, 
  space = 15,
  disabled, 
  open = false
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>();
  const [tooltipPosition, setTooltipPosition] = useState(position);

  useOutsideDetector({
    ref: wrapperRef, 
    callback: () => setIsOpen(false)
  });

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;
    setTooltipStyle();
  }, [isOpen]);

  function setTooltipStyle() {
    if (!targetRef.current) return;
    if (!wrapperRef.current) return;

    const width = wrapperRef.current.offsetWidth + 0.5;
    const dimensions = targetRef.current.getBoundingClientRect(); // where on the screen is the target
    if (!dimensions) return;

    const style: React.CSSProperties = { width };

    // center align the tooltip by taking both the target and tooltip widths into account
    style.left = (dimensions.left + (dimensions.width / 2)) - (width / 2);
    style.left = Math.max(space, style.left); // make sure it doesn't poke off the left side of the page
    style.left = Math.min(style.left, document.body.clientWidth - width - space); // or off the right

    // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
    const top = dimensions.top + dimensions.height + space;

    // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
    const bottom = (window.innerHeight - dimensions.top) + space;

    if (position === 'auto') {
      if (dimensions.bottom < window.innerHeight / 2) { // the top half of the page
        style.bottom = bottom;
        setTooltipPosition('top');
      } else {
        style.top = top;
        setTooltipPosition('bottom');
      }
    }

    if (position === 'top') style.bottom = bottom;
    if (position === 'bottom') style.top = top;

    setStyle(style);
  }

  return (
    <Popover as="div" className="relative">
      <div 
        ref={targetRef}
        className="flex place-content-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
      {(isOpen && !disabled) && (
        <Portal>
          <Popover.Panel 
            static
            className={twMerge(
              'fixed z-50 shadow-xl border rounded p-2 bg-white',
              className || ''
            )}
            ref={wrapperRef}
            style={style}
          >
            <div className="relative">
              <div className={twMerge(
                'inline-block absolute',
                'left-1/2 transform -translate-x-1/2',
                tooltipPosition !== 'top' ? '-top-2.5' : '-bottom-2.5'
              )}>
                <div className={twMerge(
                  'h-2.5 w-2.5 bg-white rotate-45 transform origin-center border-0',
                  tooltipPosition !== 'top' ? 'border-r border-t' : 'border-l border-b'
                )}></div>
              </div>
              <div className="px-2 rounded-md text-base text-black text-center font-extralight tracking-wide" >
                {tooltipText}
              </div>
            </div>
          </Popover.Panel>
        </Portal>
      )}
    </Popover>
  );
};

export default Tooltip;