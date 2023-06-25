/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";

const ProgressBar = (props) => {
  const[num, setNum]= useState(null)
  const { bgcolor, completed, value } = props;

  // useEffect(()=>{
  //   function getFraction(decimal) {
  //     // Use the gcd function to find the greatest common divisor
  //     function gcd(a, b) {
  //       if (b === 0) {
  //         return a;
  //       } else {
  //         return gcd(b, a % b);
  //       }
  //     }
    
  //     // Multiply the decimal by a factor to eliminate the decimal point
  //     let factor = Math.pow(10, decimal.toString().split('.')[1].length);
  //     let numerator = decimal * factor;
  //     let denominator = factor;
    
  //     // Find the greatest common divisor and simplify the fraction
  //     let divisor = gcd(numerator, denominator);
  //     numerator /= divisor;
  //     denominator /= divisor;
  //     // num=numerator
  //     // den=denominator
  //     return `${numerator}/${denominator}`;
  //   }

  //   if(value){
  //     setFraction(getFraction(decimal));
  //   }
  // }, [decimal, value])

  
  useEffect(()=>{
    setNum(String(completed))

  }, [completed])
   
  return (
    <>
    {num &&<div className='h-[20px] w-full flex items-center bg-white rounded-full overflow-hidden'>
      <div className={`h-fit w-[${num}%] bg-${bgcolor} rounded-inherit`} ><span className='text-white font-semibold float-right'>{completed>=1?`${completed}%`:undefined}</span>
      </div>
     </div>}
     </>
  );
};

export default ProgressBar;