import { SxProps } from "@mui/material"

const readerInfoTextSx: SxProps = {
  borderStyle: "solid",
  borderColor: "text.secondary",
  borderWidth: "0.1rem",
  backgroundColor: "background.default",
  textAlign: "center",
}

function getReaderInfoTextSx(isTitle: boolean): SxProps {
  return {
    ...readerInfoTextSx,
    ...(isTitle && {
      fontWeight: "bold",
    }),
  }
}

export { getReaderInfoTextSx }
