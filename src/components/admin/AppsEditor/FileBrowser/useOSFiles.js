import { create } from 'zustand'

export const useOSFiles = create((set, get) => {
  return {
    appPackages: [],
    appModules: [],
    appCodeGroups: [],
    appCodeFiles: [],
    //

    activePackageID: '',
    activeModuleID: '',
    activeCodeGroupID: '',
    activeCodeFileID: '',
  }
})
