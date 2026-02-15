import { Box, Button, Container, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import AddNewJobModal from './AddNewJobModal';


function HeaderBar() {
    
    const [openModal, setOpenModal] = useState<boolean>(false);

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
                        <Box sx={style}>
                            <AddNewJobModal onClose={handleClose} />
                        </Box>
                    </Modal>
                </Stack>
            </Container>
        </header>
    </>
  )
}

export default HeaderBar
