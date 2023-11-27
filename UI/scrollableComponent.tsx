import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const ScrollableComponent = (props:any) => {
  const scrollContainerRef:any = useRef(null);

  useEffect(() => {
    const ps = new PerfectScrollbar(scrollContainerRef.current, {
      // Additional options if needed
    });

    // Cleanup Perfect Scrollbar instance on component unmount
    return () => {
      ps.destroy();
    };
  }, []);

  return (
    <div ref={scrollContainerRef} style={{ height: '700px', overflow: 'hidden' }}>
      {props.children}
    </div>
  );
};

export default ScrollableComponent;