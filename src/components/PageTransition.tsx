"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key = {pathname}>
            <motion.div 
                initial = {{opacity: 1}}
                animate = {{
                    opacity: 0,
                    transition: {delay: 0.5, duration: 0.4, ease: "easeInOut"}
                }}
                className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
            />
        </div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
