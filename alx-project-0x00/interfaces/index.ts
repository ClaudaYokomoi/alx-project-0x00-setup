export interface PillProps {
    title: string;
  }

  // New ButtonProps for Button component
export interface ButtonProps {
    title: string;
    size: "small" | "medium" | "large";  // for the button size
    shape: "rounded-sm" | "rounded-md" | "rounded-full"; // for the button shape
  }