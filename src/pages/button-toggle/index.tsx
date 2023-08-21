import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import { ToggleButton, ToggleButtonGroup, Stack } from "@mui/material"
import { useState } from "react"

const MuiButtonToggle = () => {
  const [formats, setFormats] = useState<string[]>([])

  console.log({ formats })

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats)
  }

  return (
    <Stack spacing={2} direction="row">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
        //exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}
export default MuiButtonToggle
