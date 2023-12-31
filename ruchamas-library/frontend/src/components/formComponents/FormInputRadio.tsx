import React from "react"
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { Controller } from "react-hook-form"
import { FormInputProps } from "../../data.consts"

import { coverTypes } from "../../data.consts"
import { requiredAsterisk } from "./formComponentsStyle"

const options = [
  {
    label: "Hardcover",
    value: coverTypes.HARDCOVER,
  },
  {
    label: "Paperback",
    value: coverTypes.PAPERBACK,
  },
]

export const FormInputRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
        key={singleOption.label}
      />
    ))
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" required={true} sx={requiredAsterisk}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  )
}
