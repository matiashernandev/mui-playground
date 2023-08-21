import { Button, ButtonGroup, Stack } from "@mui/material"

const MuiButtonGroup = () => {
  return (
    <Stack spacing={2} direction="row">
      <ButtonGroup
        variant="text"
        orientation="vertical"
        aria-label="alignment button group"
        size="large"
        color="warning"
      >
        <Button>Text variant</Button>
        <Button>Contained variant</Button>
        <Button>Outlined variant</Button>
      </ButtonGroup>
    </Stack>
  )
}
export default MuiButtonGroup
