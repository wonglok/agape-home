import { create } from 'zustand'

export const useCoreFiles = create((set, get) => {
  return {
    appPackages: [],
    appModules: [],
    appCodeGroups: [],
    appCodeFiles: [],

    //!SECTION
    appAssetFiles: [],
    //
    activeAssetFileID: '',

    //

    activePackageID: '',
    activeModuleID: '',
    activeCodeGroupID: '',
    activeCodeFileID: '',
  }
})
