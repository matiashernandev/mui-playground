import { Box, MenuItem, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"

const MuiSelect = () => {
  const [country, setCountry] = useState("")
  const [countries, setCountries] = useState<string[]>([])

  // console.log({ country })
  // console.log({ countries })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === "string" ? value.split(",") : value)
  }

  return (
    <>
      <Box
        width="250px"
        margin={5}
        //bgcolor={"blue"}
      >
        <TextField
          label="Select your country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="AR">Argentina</MenuItem>
          <MenuItem value="AL">Alemania</MenuItem>
          <MenuItem value="FR">Francia</MenuItem>
        </TextField>
      </Box>
      <Box
        width="250px"
        //bgcolor={"blue"}
        margin={5}
      >
        <TextField
          label="Select your countries"
          select
          value={countries}
          onChange={handleChange2}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="AR">Argentina</MenuItem>
          <MenuItem value="FR">Francia</MenuItem>
          <MenuItem value="AL">Alemania</MenuItem>
        </TextField>
      </Box>
    </>
  )
}
export default MuiSelect
