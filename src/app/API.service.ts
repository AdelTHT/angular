/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateRental: OnCreateRentalSubscription;
  onUpdateRental: OnUpdateRentalSubscription;
  onDeleteRental: OnDeleteRentalSubscription;
  onCreateCar: OnCreateCarSubscription;
  onUpdateCar: OnUpdateCarSubscription;
  onDeleteCar: OnDeleteCarSubscription;
};

export type CreateCarInput = {
  id?: string | null;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
};

export type ModelCarConditionInput = {
  brand?: ModelStringInput | null;
  model?: ModelStringInput | null;
  year?: ModelIntInput | null;
  pricePerDay?: ModelFloatInput | null;
  isRented?: ModelBooleanInput | null;
  and?: Array<ModelCarConditionInput | null> | null;
  or?: Array<ModelCarConditionInput | null> | null;
  not?: ModelCarConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Car = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCarInput = {
  id: string;
  brand?: string | null;
  model?: string | null;
  year?: number | null;
  pricePerDay?: number | null;
  isRented?: boolean | null;
};

export type DeleteCarInput = {
  id: string;
};

export type CreateRentalInput = {
  id?: string | null;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
};

export type ModelRentalConditionInput = {
  carId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  and?: Array<ModelRentalConditionInput | null> | null;
  or?: Array<ModelRentalConditionInput | null> | null;
  not?: ModelRentalConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Rental = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRentalInput = {
  id: string;
  carId?: string | null;
  userId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export type DeleteRentalInput = {
  id: string;
};

export type ModelRentalFilterInput = {
  id?: ModelIDInput | null;
  carId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelRentalFilterInput | null> | null;
  or?: Array<ModelRentalFilterInput | null> | null;
  not?: ModelRentalFilterInput | null;
};

export type ModelRentalConnection = {
  __typename: "ModelRentalConnection";
  items: Array<Rental | null>;
  nextToken?: string | null;
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null;
  brand?: ModelStringInput | null;
  model?: ModelStringInput | null;
  year?: ModelIntInput | null;
  pricePerDay?: ModelFloatInput | null;
  isRented?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCarFilterInput | null> | null;
  or?: Array<ModelCarFilterInput | null> | null;
  not?: ModelCarFilterInput | null;
};

export type ModelCarConnection = {
  __typename: "ModelCarConnection";
  items: Array<Car | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionRentalFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  carId?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  startDate?: ModelSubscriptionStringInput | null;
  endDate?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRentalFilterInput | null> | null;
  or?: Array<ModelSubscriptionRentalFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCarFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  brand?: ModelSubscriptionStringInput | null;
  model?: ModelSubscriptionStringInput | null;
  year?: ModelSubscriptionIntInput | null;
  pricePerDay?: ModelSubscriptionFloatInput | null;
  isRented?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCarFilterInput | null> | null;
  or?: Array<ModelSubscriptionCarFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateCarMutation = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCarMutation = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCarMutation = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateRentalMutation = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRentalMutation = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRentalMutation = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type GetRentalQuery = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRentalsQuery = {
  __typename: "ModelRentalConnection";
  items: Array<{
    __typename: "Rental";
    id: string;
    carId: string;
    userId: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCarQuery = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ListCarsQuery = {
  __typename: "ModelCarConnection";
  items: Array<{
    __typename: "Car";
    id: string;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;
    isRented: boolean;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateRentalSubscription = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRentalSubscription = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRentalSubscription = {
  __typename: "Rental";
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCarSubscription = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCarSubscription = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCarSubscription = {
  __typename: "Car";
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  isRented: boolean;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCar(
    input: CreateCarInput,
    condition?: ModelCarConditionInput
  ): Promise<CreateCarMutation> {
    const statement = `mutation CreateCar($input: CreateCarInput!, $condition: ModelCarConditionInput) {
        createCar(input: $input, condition: $condition) {
          __typename
          id
          brand
          model
          year
          pricePerDay
          isRented
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCarMutation>response.data.createCar;
  }
  async UpdateCar(
    input: UpdateCarInput,
    condition?: ModelCarConditionInput
  ): Promise<UpdateCarMutation> {
    const statement = `mutation UpdateCar($input: UpdateCarInput!, $condition: ModelCarConditionInput) {
        updateCar(input: $input, condition: $condition) {
          __typename
          id
          brand
          model
          year
          pricePerDay
          isRented
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCarMutation>response.data.updateCar;
  }
  async DeleteCar(
    input: DeleteCarInput,
    condition?: ModelCarConditionInput
  ): Promise<DeleteCarMutation> {
    const statement = `mutation DeleteCar($input: DeleteCarInput!, $condition: ModelCarConditionInput) {
        deleteCar(input: $input, condition: $condition) {
          __typename
          id
          brand
          model
          year
          pricePerDay
          isRented
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCarMutation>response.data.deleteCar;
  }
  async CreateRental(
    input: CreateRentalInput,
    condition?: ModelRentalConditionInput
  ): Promise<CreateRentalMutation> {
    const statement = `mutation CreateRental($input: CreateRentalInput!, $condition: ModelRentalConditionInput) {
        createRental(input: $input, condition: $condition) {
          __typename
          id
          carId
          userId
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRentalMutation>response.data.createRental;
  }
  async UpdateRental(
    input: UpdateRentalInput,
    condition?: ModelRentalConditionInput
  ): Promise<UpdateRentalMutation> {
    const statement = `mutation UpdateRental($input: UpdateRentalInput!, $condition: ModelRentalConditionInput) {
        updateRental(input: $input, condition: $condition) {
          __typename
          id
          carId
          userId
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRentalMutation>response.data.updateRental;
  }
  async DeleteRental(
    input: DeleteRentalInput,
    condition?: ModelRentalConditionInput
  ): Promise<DeleteRentalMutation> {
    const statement = `mutation DeleteRental($input: DeleteRentalInput!, $condition: ModelRentalConditionInput) {
        deleteRental(input: $input, condition: $condition) {
          __typename
          id
          carId
          userId
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRentalMutation>response.data.deleteRental;
  }
  async GetRental(id: string): Promise<GetRentalQuery> {
    const statement = `query GetRental($id: ID!) {
        getRental(id: $id) {
          __typename
          id
          carId
          userId
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRentalQuery>response.data.getRental;
  }
  async ListRentals(
    filter?: ModelRentalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRentalsQuery> {
    const statement = `query ListRentals($filter: ModelRentalFilterInput, $limit: Int, $nextToken: String) {
        listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            carId
            userId
            startDate
            endDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRentalsQuery>response.data.listRentals;
  }
  async GetCar(id: string): Promise<GetCarQuery> {
    const statement = `query GetCar($id: ID!) {
        getCar(id: $id) {
          __typename
          id
          brand
          model
          year
          pricePerDay
          isRented
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCarQuery>response.data.getCar;
  }
  async ListCars(
    filter?: ModelCarFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCarsQuery> {
    const statement = `query ListCars($filter: ModelCarFilterInput, $limit: Int, $nextToken: String) {
        listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            brand
            model
            year
            pricePerDay
            isRented
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCarsQuery>response.data.listCars;
  }
  OnCreateRentalListener(
    filter?: ModelSubscriptionRentalFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRental">>
  > {
    const statement = `subscription OnCreateRental($filter: ModelSubscriptionRentalFilterInput) {
        onCreateRental(filter: $filter) {
          __typename
          id
          carId
          userId
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRental">>
    >;
  }

  OnUpdateRentalListener(
    filter?: ModelSubscriptionRentalFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRental">>
  > {
    const statement = `subscription OnUpdateRental($filter: ModelSubscriptionRentalFilterInput) {
        onUpdateRental(filter: $filter) {
          __typename
          id
          carId
          userId
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRental">>
    >;
  }

  OnDeleteRentalListener(
    filter?: ModelSubscriptionRentalFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRental">>
  > {
    const statement = `subscription OnDeleteRental($filter: ModelSubscriptionRentalFilterInput) {
        onDeleteRental(filter: $filter) {
          __typename
          id
          carId
          userId
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRental">>
    >;
  }

  OnCreateCarListener(
    filter?: ModelSubscriptionCarFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCar">>
  > {
    const statement = `subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
        onCreateCar(filter: $filter) {
          __typename
          id
          brand
          model
          year
          pricePerDay
          isRented
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCar">>
    >;
  }

  OnUpdateCarListener(
    filter?: ModelSubscriptionCarFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCar">>
  > {
    const statement = `subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
        onUpdateCar(filter: $filter) {
          __typename
          id
          brand
          model
          year
          pricePerDay
          isRented
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCar">>
    >;
  }

  OnDeleteCarListener(
    filter?: ModelSubscriptionCarFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCar">>
  > {
    const statement = `subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
        onDeleteCar(filter: $filter) {
          __typename
          id
          brand
          model
          year
          pricePerDay
          isRented
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCar">>
    >;
  }
}
