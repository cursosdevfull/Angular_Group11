interface GeneralPerson {
  name: string;
  lastname: string;
}

export interface Person extends GeneralPerson {
  age: number;
}

interface AgePerson {
  age: number;
}

type TPersons = GeneralPerson & AgePerson;

export type Persons = Partial<Person>[];
