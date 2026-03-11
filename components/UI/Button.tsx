import { Pressable } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'default' | 'outline';
  className?: string;
  disabled?: boolean;
}



export function Button({ children, onPress, variant = 'default', className = '', disabled }: ButtonProps) {

  const buttonVariants = {
    default: `bg-[#2C8F5C] active:bg-[#1E6B42] active:opacity-75 font-bold text-white ${disabled ? 'opacity-50' : ''}`,
    outline: `border border-green-500 text-green-500 font-bold active:bg-green-500/10 active:opacity-75 ${disabled ? 'opacity-50' : ''}`,
  };

  return (
    <Pressable
      className={`${buttonVariants[variant]} p-[1em] items-center rounded-md ${className}`}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </Pressable>
  );
}