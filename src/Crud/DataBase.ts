class DataBase<T> {
  data: T[] = [];
  constructor(defaultData: T[]) {
    this.data = defaultData;
  }

  create() {}

  read() {}

  update() {}

  delete() {}
}

export default DataBase;
