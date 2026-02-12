import { Box, Button, Stack } from "@mui/material"
import { useForm , SubmitHandler} from "react-hook-form";

import { useJobApplicationsStore } from "../store";

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

const inputStyle ={
    width: '100%',
    padding: '10px', 
    marginBottom: '15px', 
    borderRadius: '15px', 
    border: '1px solid #ccc', 
    fontSize: '16px',
}


function AddNewJobModal({onClose}: {onClose: () => void}) {

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm();

const addJob = useJobApplicationsStore((state) => state.addJob);

const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data); 

    const newJob = {
        id: parseInt(data.id),
        jobTitle: data.jobTitle,
        company: data.company,
        status: data.status,
        dateSubmitted: data.dateSubmitted
    }

    addJob(newJob);
    reset();
    onClose();


}

  return (
    <>
        <Box sx={style}>
            <Stack>
                <h1 className="text-2xl text-center font-bold">Add New Job Application</h1>
                <form className="mt-10 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("id")} style={inputStyle} placeholder="ID" type="text" name="id" id="Id" />
                    <input {...register("jobTitle")} style={inputStyle} placeholder="Job Title" type="text" name="jobTitle" id="JobTitle" />
                    <input {...register("company")} style={inputStyle} placeholder="Company" type="text" name="company" id="Company" />
                    <input {...register("status")} style={inputStyle} placeholder="Status" type="text" name="status" id="Status" />
                    <input {...register("dateSubmitted")} style={inputStyle} placeholder="Date Submitted" type="text" name="dateSubmitted" id="DateSubmitted" />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Stack>
        </Box>
    </>
  )
}

export default AddNewJobModal
