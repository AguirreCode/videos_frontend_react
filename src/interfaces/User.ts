export interface userRegister {
  name: string;
  first_lastname: string;
  second_lastname: string;
  email: string;
  password?: string;
  confirm_password?: string;
}

export interface userLogin {
  email: string;
  password: string;
}

export interface Password {
  password: string;
  confirm_password: string;
}

export interface RecoveryPassword {
  email: string;
}

