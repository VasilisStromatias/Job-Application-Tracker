import { Button, Container, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'


function HeaderBar() {
  return (
    <>
        <header className="shadow-md py-4">
            <Container disableGutters>
                <Stack className='justify-end' direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<AddIcon />} color="primary">
                        Add New Job
                    </Button>
                </Stack>
            </Container>
        </header>
    </>
  )
}

export default HeaderBar
