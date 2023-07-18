import { create } from 'zustand'

export const useFileBrowser = create((set, get) => {
  return {
    appPackages: [],
    appModules: [],
    appCodeGroups: [],
    appCodeFiles: [],
    //
  }
})
