import { styled } from "../../styles/stitches.config";
import * as RadixSelect from "@radix-ui/react-select";

export const SelectFieldWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const SelectLabel = styled("label", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: "$xs",
  color: "$neutral-700",
  fontWeight: 500,

  "& > span": {
    fontSize: "$xs",
    color: "$warning-900",
    fontWeight: 500,
    marginLeft: "8px",
  },
});


export const SelectTrigger = styled(RadixSelect.Trigger, {
  all: "unset",
  boxSizing: "border-box",
  backgroundColor: "$white",
  borderRadius: "4px",
  padding: "0 16px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  fontSize: "$md",
  color: "$neutral-900",
  border: "1px solid $neutral-400",
  transition: "all 0.1s ease",


 "&:focus, &:focus-visible": {
  border: "2px solid $primary",
  boxShadow: "0 0 0 4px $colors$primary-100",
},
  "&[data-placeholder]": {
    color: "$neutral-600",
  },
});

export const SelectIcon = styled("span", {
  color: "$neutral-500",
  display: "flex",
  alignItems: "center",
});

export const SelectContent = styled(RadixSelect.Content, {
  backgroundColor: "$primaryForeground",
  borderRadius: "8px",
  padding: "0.5rem",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.5)",
  zIndex: 9999,
  position: "relative",
  width: "100%",
  marginTop: "50px",
  border: "1px solid $neutral-300", // Borda mais clara

  '&[data-side="bottom"]': {
    top: "100%",
    marginTop: "4px",
  },
});

export const SelectViewport = styled(RadixSelect.Viewport, {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  backgroundColor: "inherit",
  borderRadius: "inherit",
});

export const SelectItem = styled(RadixSelect.Item, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  fontSize: "$md",
  color: "$neutral-900",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: "$white",
  transition: "background-color 0.2s",

  "&[data-highlighted]": {
    backgroundColor: "$neutral-100",
  },

  "&[data-state='checked']": {
    backgroundColor: "$primary-50",
    fontWeight: 500,
  },
});

export const SelectItemText = styled(RadixSelect.ItemText, {
  flex: 1,
});

export const SelectError = styled("span", {
  color: "$danger",
  fontSize: "$xs",
  marginTop: "4px",
});

export const SelectPortal = styled(RadixSelect.Portal, {
  position: "absolute",
  zIndex: 99999,
});
