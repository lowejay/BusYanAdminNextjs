import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const initialState = {}

const getState = (stateName) => {
    return typeof window !== 'undefined' && localStorage.getItem('admin-user')
        ? JSON.parse(localStorage.getItem('admin-user'))
        : initialState
}

export const useUserStore = create(
    persist(
        (set) => ({
            user: getState('admin-user'),
            setUser: (user) => set(() => ({ user: user })),
            resetUser: () => set(() => ({ user: initialState }))
        }),
        {
            name: 'admin-user', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },
    )
)

export const useJobStore = create(
    (set) => ({
        job: initialState,
        setJob: (newJob) => set((state) => ({ job: { ...state.job, ...newJob } })),
        reset: () => set(() => ({ job: initialState }))
    })
)