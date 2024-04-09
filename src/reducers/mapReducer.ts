import { LatLngExpression } from "leaflet";

export enum MapActionTypes {
  UPDATE_POSITION = "UPDATE_POSITION",
}
export type MapAction = {
  type: string;
  payload: LatLngExpression;
};

export interface IMapState {
  position: LatLngExpression | number[];
}

export function mapReducer(state: IMapState, action: MapAction) {
  const { type, payload } = action;
  switch (type) {
    case MapActionTypes.UPDATE_POSITION:
      return { ...state, position: payload };
    default:
      return state;
  }
}
