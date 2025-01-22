
// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Loader() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-purple-100">
//       <motion.div
//         className="relative flex items-center justify-center w-32 h-32"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//       >
//         {/* Outer Ring */}
//         <motion.div
//           className="absolute w-full h-full border-4 border-blue-500 rounded-full"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         />
        
//         {/* Middle Ring */}
//         <motion.div
//           className="absolute w-24 h-24 border-4 border-purple-500 rounded-full"
//           animate={{ scale: [1.1, 1, 1.1] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         />
        
//         {/* Inner Ring */}
//         <motion.div
//           className="absolute w-16 h-16 border-4 border-pink-500 rounded-full"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         />
        
//         {/* Central Dot */}
//         <motion.div
//           className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"
//           animate={{ scale: [1, 0.8, 1] }}
//           transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </motion.div>
      
//       {/* Loading Text */}
//       <motion.h2
//         className="mt-8 text-2xl font-bold text-gray-800"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//       >
//         Loading...
//       </motion.h2>
      
//       {/* Animated Dots */}
//       <div className="flex mt-4 space-x-2">
//         {[0, 1, 2].map((index) => (
//           <motion.div
//             key={index}
//             className="w-3 h-3 bg-blue-500 rounded-full"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [1, 0.5, 1],
//             }}
//             transition={{
//               duration: 1,
//               repeat: Infinity,
//               delay: index * 0.2,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <motion.div
        className="relative flex items-center justify-center w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer circle */}
        <motion.div
          className="absolute w-full h-full border-4 border-gray-200 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner circle */}
        <motion.div
          className="absolute w-24 h-24 border-4 border-blue-500 rounded-full"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Shopping bag icon */}
        <motion.div
          className="text-blue-600"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShoppingBag size={48} />
        </motion.div>
      </motion.div>
      
      {/* Tagline */}
      <motion.h2
        className="mt-8 text-xl font-semibold text-gray-800 font-sans"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Preparing...
      </motion.h2>
      
      {/* Progress indicator */}
      <motion.div
        className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}