import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center font-bold shadow-md transition transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      colVariant: {
        default: "bg-gray-500 text-white hover:bg-gray-600",
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-purple-600 text-white hover:bg-purple-700",
        success: "bg-green-600 text-white hover:bg-green-700",
        warning: "bg-orange-600 text-white hover:bg-orange-700",
        error: "bg-red-600 text-white hover:bg-red-700",
      },
      variant: {
        outline:
          "border border-input bg-transparent text-black hover:text-white",
        basic: "rounded-none",
        rounded: "rounded-lg",
        pill: "rounded-full",
      },
      size: {
        sm: "py-1 px-3 text-sm",
        md: "py-2 px-4 text-base",
        lg: "py-3 px-6 text-lg",
        full: "py-3 px-6 text-lg w-full",
        responsive: "py-2 px-4 text-sm md:text-base lg:text-lg",
      },
    },
    compoundVariants: [
      {
        colVariant: "primary",
        variant: "outline",
        className: "border-blue-600 hover:bg-blue-700",
      },
      {
        colVariant: "secondary",
        variant: "outline",
        className: "border-purple-600 hover:bg-purple-700",
      },
      {
        colVariant: "success",
        variant: "outline",
        className: "border-green-600 hover:bg-green-700",
      },
      {
        colVariant: "warning",
        variant: "outline",
        className: "border-orange-600 hover:bg-orange-700",
      },
      {
        colVariant: "error",
        variant: "outline",
        className: "border-red-600 hover:bg-red-700",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      colVariant: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className, variant, colVariant, size, ...props }, ref) => {
  return (
    <button
      className={cn(button({ className, variant, colVariant, size }))}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});
