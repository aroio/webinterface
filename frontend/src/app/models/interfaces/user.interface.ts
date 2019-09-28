export default interface UserInterface {
    id?: number;
    username?: string;
    email?: string;
    fullname?: string;
    firstname?: string;
    company?: string;
    lastname?: string;
    localeCode?: string;
    roles?: Array<string>;
    token?: string;
    managements?: Array<any>;
    employments?: Array<any>;
    client?: any;
    position?: string;
    workingHours?: number;
    typeOfEmployment?: string;
    grossSalary?: number;
    hourlyRate?: number;
    invitation_state?: string;
}
