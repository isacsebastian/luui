"use client";

import React, { useState, useEffect } from 'react';

interface CountProps{
    initialValue?: number;
    finalValue: number;
    duration?: number;

}

const Count: React.FC<CountProps> = ({  initialValue = 0, finalValue, duration = 10000 }) => {
    const [count, setCount] = useState( initialValue);
    const step = finalValue >  initialValue ? 1 : -1;
    const interval = duration / Math.abs(finalValue -  initialValue);

    useEffect (()=>{
        if (count !== finalValue){
            const timeoutId = setTimeout(()=>{
                setCount(count + step);
            }, interval);
        return () => clearTimeout(timeoutId);
    
       }
  }, [count, finalValue, interval, step]);

  return <span>{count}</span>;
}

export default Count;