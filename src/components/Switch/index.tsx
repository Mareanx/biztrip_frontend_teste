import { styled } from "../../styles/stitches.config";

const SwitchContainer = styled("label", {
  position: "relative",
  display: "inline-block",
  width: "48px",
  height: "24px",
});

const SwitchInput = styled("input", {
  opacity: 0,
  width: 0,
  height: 0,

  "&:checked + span": {
    backgroundColor: "$primary",
  },

  "&:checked + span:before": {
    transform: "translateX(24px)",
  },
});

const Slider = styled("span", {
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "$neutral-400",
  transition: ".2s",
  borderRadius: "999px",

  "&:before": {
    position: "absolute",
    content: "",
    height: "18px",
    width: "18px",
    left: "3px",
    bottom: "3px",
    backgroundColor: "$primaryForeground",
    transition: ".2s",
    borderRadius: "50%",
  },
});

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Switch = ({ checked, onChange }: Props) => (
  <SwitchContainer>
    <SwitchInput
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <Slider />
  </SwitchContainer>
);
