import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'lg',
  ...props
}) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const baseClasses = `
    bg-white rounded-2xl shadow-soft
    ${paddingClasses[padding]}
    ${className}
  `;

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-heading-md font-heading font-bold text-nature-dark ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-nature-light leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-6 ${className}`}>
      {children}
    </div>
  );
}
