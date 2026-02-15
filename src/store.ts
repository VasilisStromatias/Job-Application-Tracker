import  {create} from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type Job = {
    jobTitle: string
    company: string
    status: 'Applied' | 'Interviewing' | 'Offered' | 'Rejected'
    dateSubmitted: string
}

type JobApplication = {
    jobsInfo: Job[]
    addJob: (job: Job) => void
    editJob: (id: number, updatedJob: Job) => void
    deleteJob: (id: number) => void
}

export const useJobApplicationsStore = create<JobApplication>()(
    persist(
        (set) => ({
            jobsInfo: [],
            addJob: (job: Job) => set((state) => ({
                jobsInfo: [...state.jobsInfo, job]
            })),
            editJob: (id: number, updatedJob: Job) => set((state) => ({
                jobsInfo: state.jobsInfo.map((job, index) => 
                    index + 1 === id ? updatedJob : job
                )
            })),
            deleteJob: (id: number) => set((state) => ({
                jobsInfo: state.jobsInfo.filter((job, index) => index + 1 !== id)
            }))
        }),
        {
            name: 'job-applications-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
