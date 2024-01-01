import React from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useFormContext, Controller } from "react-hook-form"
import { FormInputProps } from "../../../../data.consts"

const options = [
  {
    label: "publisher a",
    value: "1",
  },
  {
    label: "publisher b",
    value: "2",
  },
]

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  )
}
