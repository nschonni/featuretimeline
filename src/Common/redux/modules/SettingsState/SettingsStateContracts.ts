export enum ProgressTrackingCriteria {
    ChildWorkItems,
    EffortsField
}

export interface ISettingsState {
    showWorkItemDetails: boolean;
    progressTrackingCriteria: ProgressTrackingCriteria;
    showClosedSinceDays: number;
    lastEpicSelected?: number;
}

export interface ISettingsAwareState {
    settingsState: ISettingsState;
}