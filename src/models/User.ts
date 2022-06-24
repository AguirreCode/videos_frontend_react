export default class User {
  public _id: string;
  public _name: string;
  public _email: string;
  public _first_lastname: string;
  public _second_lastname: string;

  constructor(
    id: string,
    name: string,
    email: string,
    first_lastname: string,
    second_lastname: string
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._first_lastname = first_lastname;
    this._second_lastname = second_lastname;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstLastname(): string {
    return this._first_lastname;
  }

  set firstLastname(value: string) {
    this._first_lastname = value;
  }

  get secondLastname(): string {
    return this._second_lastname;
  }

  set secondLastname(value: string) {
    this._second_lastname = value;
  }

}

