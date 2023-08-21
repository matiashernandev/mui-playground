import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
  const [value, setValue] = useState("")

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="outlined" variant="outlined" />
        <TextField label="filled" color="secondary" variant="filled" />
        <TextField label="standard" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="required" required />
        <TextField label="small" size="small" helperText="helperText" />
        <TextField label="password" type="password" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField value="read only" InputProps={{ readOnly: true }} />
        <TextField label="disabled" disabled />
        <TextField label="error" error />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="startAdornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="endAdornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="state validation"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "required" : "ok"}
          error={!value}
          required
        />
      </Stack>
    </Stack>
  )
}
export default MuiTextField
