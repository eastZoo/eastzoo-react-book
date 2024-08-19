import { Control, Controller } from "react-hook-form";
import { ChangeEvent } from "react";
import { InputProps, Inputs } from "../../Inputs/Inputs";

interface ControlTextProps extends InputProps {
  control: Control<any>;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ControlText = ({
  type = "text",
  size = "md",
  direction = "column",
  id,
  label,
  placeholder,
  width,
  name,
  disabled,
  control,
  defaultValue,
}: ControlTextProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, formState }) => (
        <Inputs
          id={id}
          label={label}
          size={size}
          width={width}
          direction={direction}
          errored={!!formState.errors[name]}
          erroredTxt={formState.errors[name]?.message}
        >
          <input
            id={id}
            placeholder={placeholder}
            type={type}
            onChange={field.onChange}
            value={field.value}
            disabled={disabled}
          />
        </Inputs>
      )}
    />
  );
};
