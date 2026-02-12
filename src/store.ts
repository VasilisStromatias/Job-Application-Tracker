import  {create} from "zustand"

type HomeStore = {
    count: number
    increment: () => void
    decrement: () => void
}

type Job = {
    id: number
    jobTitle: string
    company: string
    status: string
    dateSubmitted: string
}

type JobApplication = {
    jobsInfo: Job[]
    addJob: (job: Job) => void
}

export const useHomeStore = create<HomeStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1}))
}));

export const useJobApplicationsStore = create<JobApplication>((set) => ({
    jobsInfo: [],
    addJob: (job: Job) => set((state) => ({
        jobsInfo: [...state.jobsInfo, job]
    }))
}));
