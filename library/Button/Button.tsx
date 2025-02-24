import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("inline-block px-5 py-3 font-bold", {
  variants: {
    colVariant: {
      default: "bg-slate-500 text-white",
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-orange-500 text-white",
      error: "bg-red-500 text-white",
    },
    variant: {
      ounline:
        "border bg-none border-slate-500 text-black hover:bg-slate-400 hover:text-white",
      basic: "rounded-none",
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
    size: {
      sm: "py-1 px-2 text-xs",
      md: "py-2 px-4 text-base",
      lg: "py-3 px-6 text-lg",
      full: "py-3 px-6 text-lg w-full",
    },
  },
  defaultVariants: {
    variant: "ounline",
    size: "md",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  colVariant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(button({ colVariant, variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
