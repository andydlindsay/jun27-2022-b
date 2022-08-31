// generic: interface where some or all of the types are not known at type definition time; instead they are passed in by the dev using the type

interface IContainer<T> {
  name: string;
  contents: T;
}

const numContainer: IContainer<number> = {
  name: 'num container',
  contents: 42
};

const stringContainer: IContainer<string> = {
  name: 'string container',
  contents: 'hello world'
};
