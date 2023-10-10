import { Profile } from "./profile.model";

export interface User {
    iduser: number;
    mail: string;
    password: string;
    status: boolean;
    userProfile: Profile;
}