import { type ResourceProvider } from '@rck.princy/ra-data-provider-wrapper';

export type Dummy = {
  id: string;
  name: string;
};

export const dummyProvider: ResourceProvider<Dummy> = {
  resource: 'dummies',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getList: async ({ filter: __filter, meta: __meta }) => {
    return Promise.resolve([
      {
        id: 'test',
        name: 'test',
      },
    ]);
  },
  getOne: async ({ id }) => {
    return Promise.resolve({
      id,
      name: `name: ${id}`,
    });
  },
  deleteAll: async () => {
    //some api calls
    return Promise.resolve([]);
  },
  //others
};
