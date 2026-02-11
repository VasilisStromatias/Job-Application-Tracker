import { Box, Container } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'jobTitle',
    headerName: 'Job Title',
    width: 150,
    editable: true,
  },
  {
    field: 'company',
    headerName: 'Company',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, jobTitle: 'Software Engineer', company: 'Tech Corp', status: 'Applied' },
];

function JobsList() {
  return (
    <>
    <Container sx={{ mt: 4 }}>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid 
            rows={rows} 
            columns={columns}
            checkboxSelection 
            />
        </Box>
    </Container>
    </>
  )
}

export default JobsList

