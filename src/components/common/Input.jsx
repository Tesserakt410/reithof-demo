import { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  const baseClasses = `
    w-full px-4 py-3
    bg-white border-2 rounded-xl
    text-nature-dark placeholder-nature-light/50
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
    disabled:bg-gray-50 disabled:cursor-not-allowed
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'}
  `;

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-nature-dark mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={baseClasses}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

export const Textarea = forwardRef(({
  label,
  error,
  rows = 4,
  className = '',
  ...props
}, ref) => {
  const baseClasses = `
    w-full px-4 py-3
    bg-white border-2 rounded-xl
    text-nature-dark placeholder-nature-light/50
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
    disabled:bg-gray-50 disabled:cursor-not-allowed
    resize-none
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'}
  `;

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-nature-dark mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={baseClasses}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';
