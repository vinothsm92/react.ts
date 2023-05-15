export interface IApplication { id: number, application: string }

export interface IAppData  {
    ConsumedQuantity: number,
    Cost: number,
    Date: string,
    InstanceId: string,
    MeterCategory: string,
    ResourceGroup: string,
    ResourceLocation: string,
    Tags: {
      "app-name": string,
      environment: string,
      "business-unit": string
    },
    UnitOfMeasure: string,
    Location: string,
    ServiceName: string
  }

  export type IAppContextType = {
    appData: IAppData[];
    modalTitle: string;
  };
