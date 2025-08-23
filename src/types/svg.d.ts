// This file helps TypeScript understand SVG imports
declare module "*.svg" {
  import React from "react";
  const SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}
