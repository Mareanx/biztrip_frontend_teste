import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontFamily: "$default",
    backgroundColor: "$neutral-100",
    color: "$text",
  },
});
