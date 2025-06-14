
import { useRef, ReactNode, MouseEvent, CSSProperties } from 'react';
import { Button } from '@/components/ui/button';

interface RippleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  style?: CSSProperties;
}

export const RippleButton = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'default',
  size = 'default',
  style
}: RippleButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'absolute rounded-full bg-white/30 animate-ping pointer-events-none';

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) onClick();
  };

  return (
    <Button
      ref={buttonRef}
      onClick={createRipple}
      variant={variant}
      size={size}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {children}
    </Button>
  );
};
