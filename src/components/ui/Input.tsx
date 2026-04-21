import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {label && (
          <label
            htmlFor={inputId}
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
            }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined}
          className={cn(
            'w-full px-3 py-2 rounded-md text-sm',
            'border border-[--color-border] bg-white',
            'transition-shadow duration-150',
            'focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} style={{ fontSize: '0.8rem', color: 'red' }} role="alert">
            {error}
          </p>
        )}
        {helper && !error && (
          <p id={`${inputId}-helper`} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            {helper}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
