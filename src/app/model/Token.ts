export interface Token{
  id:number;
  fullName:string;
  email:string;
  authorities : Roles[];
}

enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SERVICE_ADMIN = 'SERVICE_ADMIN',
}

