import CelebrationIcon from "@mui/icons-material/Celebration"
import { Button, IconButton, Stack } from "@mui/material"

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text variant</Button>
        <Button variant="contained">Contained variant</Button>
        <Button variant="outlined">Outlined variant</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary color
        </Button>
        <Button variant="contained" color="secondary">
          secondary color
        </Button>
        <Button variant="contained" color="error">
          error color
        </Button>
        <Button variant="contained" color="warning">
          warning color
        </Button>
        <Button variant="contained" color="info">
          info color
        </Button>
        <Button variant="contained" color="success">
          succes color
        </Button>
      </Stack>

      <Stack display="block" direction="row" spacing={2}>
        <Button variant="outlined" size="small">
          small size
        </Button>
        <Button variant="contained" color="error" size="medium">
          medium size
        </Button>
        <Button variant="contained" size="large">
          large size
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          disableRipple
          startIcon={<CelebrationIcon />}
        >
          startIcon disableRipple
        </Button>
        <Button
          variant="contained"
          disableElevation
          endIcon={<CelebrationIcon />}
        >
          endIcon disableElevation
        </Button>

        <IconButton aria-label="celebration" color="success" size="small">
          <CelebrationIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
export default MuiButton
