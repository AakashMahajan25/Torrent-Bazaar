import React from "react";

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => {
  return <label {...props} />;
};

export default Label;
