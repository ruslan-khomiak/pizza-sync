export interface IUi {
  readonly language: string;
  readonly isSidenavVisible: boolean;
  readonly isDialogIdentificationOpen: boolean;

  // pizzeria information
  readonly pizzeria: {
    readonly name: string;
    readonly phone: string;
    readonly url: string;
  };
}
