import { Rastreo } from "./Rastreo.interface";

export interface RastreoResponse {
    data:       Rastreo[];
    isSucces:   boolean;
    message:    string;
}