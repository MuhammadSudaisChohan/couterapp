"use client"

import React, { useEffect, useState } from "react";
// const Page = () => {
//   let[counter, setCounter] = useState(0);

//   const incrementCounter = () => {
//     if(counter===20){
//       alert('The number will not increase by 20')
//     }
//     else{
//       setCounter(counter + 1);

//     }
//   };

//   const decrementCounter = () => {

//     if(counter===0){
//       alert('The number will not decrease by 0')
//     }
//     else{
//       setCounter(counter - 1);

//     }
//   };

//   return (
//     <div className="mt-8 text-center">
//       <h1 className="text-3xl font-bold font-serif text-center text-blue-950">Counter Project</h1>
//       <h2>{counter}</h2>
//       <button className="text-sm font-bold font-serif text-center bg-blue-500 rounded-md p-1 m-2 text-white" onClick={incrementCounter}>
//         Add number
//       </button>
//       <br />
//       <button className="text-sm font-bold font-serif text-center bg-blue-500 rounded-md p-1 m-2 text-white" onClick={decrementCounter}>
//         Remove number
//       </button>
//     </div>  
//   );
// };

// export default Page;



const Home = () => {
  let [count, setCount] = useState(0);
  let [run, setRun] = useState(false);
  useEffect(() => {
    let timer: any;
    if (run) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, 1000)

    }
    return () => {
      clearInterval(timer)
    }
  }, [run, count])

  const handleStart = () => {
    setRun(true)
  }

  const handlePause = () => {
    setRun(false)
  }

  const handleEnd = () => {
    setRun(false)
    setCount(0)
  }
  return (
    <div className="bg-orange-200 h-screen flex justify-center items-center">
      <div className="bg-orange-300 p-10 shadow-lg shadow-orange-700 flex flex-col gap-10 items-center rounded-lg">
        <h1 className="text-3xl font-bold font-serif text-orange-900">Counter App</h1>
        <p className="text-3xl font-bold font-serif text-orange-900">{count}</p>

        {/* buttons */}
        <div className="flex gap-5">
          <button onClick={handleStart} className="bg-orange-800 text-white p-2 rounded-lg hover:bg-orange-950">Start</button>
          <button onClick={handlePause} className="bg-orange-800 text-white p-2 rounded-lg hover:bg-orange-950">Pause</button>
          <button onClick={handleEnd} className="bg-orange-800 text-white p-2 rounded-lg hover:bg-orange-950">End</button>
        </div>
      </div>
    </div>
  )
}

export default Home