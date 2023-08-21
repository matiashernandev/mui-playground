import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material"
import { ChangeEvent, useState } from "react"

const MuiRadioButton = () => {
  const [value, setValue] = useState("")
  console.log({ value })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box
      width="250px"
      margin={5}
      //bgcolor={"blue"}
    >
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
          // defaultValue={"6-10"} F
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel
            control={<Radio size="small" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            //defaultChecked F
            control={<Radio color="secondary" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText>FormHelperText</FormHelperText>
      </FormControl>
    </Box>
  )
}
export default MuiRadioButton
