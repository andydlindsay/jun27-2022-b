interface IDog {
  name: string;
  faveToy: string;
}

interface IUser {
  id?: number;
  username: string;
  password: string;
  friends?: IUser[];
  pet?: IDog;
}

const user: IUser = {
  username: 'jstamos',
  password: '1234',
  id: 42
};

const user2: IUser = {} as IUser;

// const users: IUser[] = [];

// users.push(user);
// users.push(true);
