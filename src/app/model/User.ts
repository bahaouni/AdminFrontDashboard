export interface UserDTO{
  id:number;
  firstname:string;
  lastname:string;
  dateOfBirth:string;
  email:string;
  roles: Roles[];
}

enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SERVICE_ADMIN = 'SERVICE_ADMIN',
}

