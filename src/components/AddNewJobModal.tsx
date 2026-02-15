import { Box, Button, Stack } from "@mui/material"
import { useForm , SubmitHandler} from "react-hook-form";

import { useJobApplicationsStore } from "../store";

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
    console.log('onAddSubmit', data); 

    const newJob = {
        jobTitle: data.jobTitle,
        company: data.company,
        status: data.status,
        dateSubmitted: data.dateSubmitted
    }

    console.log('newJob', newJob);

    addJob(newJob);
    reset();
    onClose();


}

  return (
    <>
        <Stack>
            <h1 className="text-2xl text-center font-bold">Add New Job Application</h1>
            <form className="mt-10 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("jobTitle")} style={inputStyle} placeholder="Job Title" type="text" name="jobTitle" id="JobTitle" />
                <input {...register("company")} style={inputStyle} placeholder="Company" type="text" name="company" id="Company" />
                <select {...register("status")} style={inputStyle} name="status" id="Status">
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offered">Offered</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <input {...register("dateSubmitted")} style={inputStyle} placeholder="Date Submitted" type="date" name="dateSubmitted" id="DateSubmitted" />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </Stack>
        
    </>
  )
}

export default AddNewJobModal
