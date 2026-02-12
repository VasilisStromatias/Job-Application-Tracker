import { Button, Container, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import AddNewJobModal from './AddNewJobModal';


function HeaderBar() {
    
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleOpen = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false); 
    } 

  return (
    <>
        <header className="shadow-md py-4">
            <Container disableGutters>
                <Stack className='justify-end' direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<AddIcon />} color="primary" onClick={handleOpen}>
                        Add New Job
                    </Button>
                    <Modal open={openModal} onClose={handleClose}>
                        <AddNewJobModal onClose={handleClose} />
                    </Modal>
                </Stack>
            </Container>
        </header>
    </>
  )
}

export default HeaderBar
