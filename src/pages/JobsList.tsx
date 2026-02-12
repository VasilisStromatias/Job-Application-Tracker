import { Box, Container } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useJobApplicationsStore } from '../store'


function JobsList() {

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
  {
  field: 'dateSubmitted', 
  headerName: 'Date Submitted', 
  width: 160, 
  } 
]; 

const jobsInfo = useJobApplicationsStore((state) => state.jobsInfo);

const rows = jobsInfo.map((job) => (
  {
    id: job.id, 
    jobTitle: job.jobTitle, 
    company: job.company, 
    status: job.status, 
    dateSubmitted: job.dateSubmitted 
  }
));

  return (
    <>
    <Container sx={{ mt: 4 }}>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid 
            rows={rows} 
            columns={columns} 
            />
        </Box>
    </Container>
    </>
  )
}

export default JobsList

