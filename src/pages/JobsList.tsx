import { Box, Container, IconButton, Modal } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useJobApplicationsStore } from '../store'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import EditJobModal from '../components/EditJobModal'
import { useState } from 'react'

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 5,
      p: 4,
  };


function JobsList() {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);

  const jobsInfo = useJobApplicationsStore((state) => state.jobsInfo);
  const deleteJob = useJobApplicationsStore((state) => state.deleteJob);

  const handleOpen = () => {
      setOpenModal(true);
  }

  const handleClose = () => {
      setOpenModal(false); 
  } 

  const handleEdit = (row: any) => {
    setSelectedRowData(row);
    console.log('Selected Row Data:', row);
    handleOpen();
  };

  const handleDelete = (id: number) => {
    deleteJob(id);
  };

  const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'id',
    headerName: 'ID', 
    width: 100,
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
  },
  {
    field: 'jobTitle',
    headerName: 'Job Title',
    width: 250,
    flex: 1,
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
  },
  {
    field: 'company',
    headerName: 'Company',
    width: 200,
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
    cellClassName: (params) => `status-${params.value}`,
  },
  {
    field: 'dateSubmitted', 
    headerName: 'Date Submitted', 
    width: 160, 
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    resizable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box>
        <IconButton
          color="primary"
          size="small"
          onClick={() => handleEdit(params.row)}
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          size="small"
          onClick={() => handleDelete(params.row.id)}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    ),
  }
]; 


const rows = jobsInfo.map((job, index) => (
  {
    id:index + 1,
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
            getRowId={(row) => row.id}
            />
        </Box>
        <Modal open={openModal} onClose={handleClose}>
            <Box sx={style}>
                <EditJobModal onClose={handleClose} rowData={selectedRowData} />
            </Box>
        </Modal>
    </Container>
    </>
  )
}

export default JobsList

