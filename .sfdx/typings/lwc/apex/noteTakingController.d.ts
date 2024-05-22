declare module "@salesforce/apex/noteTakingController.createNoteRecord" {
  export default function createNoteRecord(param: {title: any, description: any}): Promise<any>;
}
declare module "@salesforce/apex/noteTakingController.getNotes" {
  export default function getNotes(): Promise<any>;
}
declare module "@salesforce/apex/noteTakingController.updateNoteRecord" {
  export default function updateNoteRecord(param: {noteId: any, title: any, description: any}): Promise<any>;
}
