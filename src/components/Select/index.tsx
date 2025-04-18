import * as RadixSelect from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  SelectContent,
  SelectItem,
  SelectViewport,
  SelectItemText,
  SelectIcon,
  SelectError,
  SelectFieldWrapper,
  SelectLabel,
  SelectTrigger,
} from "./styled";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  onValueChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
  disabled?: boolean;
};

export const Select = ({
  label,
  options,
  onValueChange,
  placeholder = "Selecione...",
  error,
  defaultValue,
  disabled
}: SelectProps) => {
  return (
    <SelectFieldWrapper>
      <SelectLabel>
        {label}
        <span>(obrigatório)</span>
      </SelectLabel>

      <RadixSelect.Root
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        disabled={disabled ?? false}
      >
        <SelectTrigger>
          <RadixSelect.Value placeholder={placeholder} />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>

        <RadixSelect.Portal>
          <SelectContent>
            <SelectViewport>
              {options.map((option) => (
                <SelectItem value={option.value} key={option.value}>
                  <SelectItemText>{option.label}</SelectItemText>
                  <RadixSelect.ItemIndicator>
                    <CheckIcon />
                  </RadixSelect.ItemIndicator>
                </SelectItem>
              ))}
            </SelectViewport>
          </SelectContent>
        </RadixSelect.Portal>
      </RadixSelect.Root>

      {error && <SelectError>{error}</SelectError>}
    </SelectFieldWrapper>
  );
};
