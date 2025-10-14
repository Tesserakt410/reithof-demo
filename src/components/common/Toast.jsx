import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';

export default function Toast({ message, onClose, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 md:bottom-8 left-0 right-0 z-[9999] flex justify-center px-4"
        >
          <div className="bg-white rounded-xl shadow-2xl border-2 border-primary-500 p-4 flex items-start gap-3 max-w-md w-full">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <Info className="text-primary-600" size={20} />
            </div>
            <div className="flex-grow">
              <p className="text-nature-dark font-medium leading-relaxed">
                {message}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-nature-light" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
