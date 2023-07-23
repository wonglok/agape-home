import { create } from 'zustand'

export const useCoreFiles = create((set, get) => {
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
