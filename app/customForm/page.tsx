import React, { forwardRef } from "react";

const CustomForm = forwardRef<
  HTMLFormElement,
  React.HTMLProps<HTMLFormElement>
>(({ children, ...props }, ref) => (
  <form ref={ref} {...props}>
    {children}
  </form>
));

CustomForm.displayName = "CustomForm";

export default CustomForm;
