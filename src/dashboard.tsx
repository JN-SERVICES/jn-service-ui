import {
  Admin,
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  ListGuesser,
  required,
  Resource,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  TopToolbar,
} from 'react-admin';
import { v4 as uuid } from 'uuid';
import { authProvider, raDataProvider } from './providers';

export const CreatePerson = () => {
  return (
    <Create
      transform={(data) => ({ ...data, id: uuid() })}
      mutationOptions={{
        meta: {
          mutationType: 'CREATE',
        },
      }}
    >
      <SimpleForm>
        <TextInput validate={required()} source="name" label="Name" />
      </SimpleForm>
    </Create>
  );
};

export const EditPerson = () => {
  return (
    <Edit
      mutationOptions={{
        meta: {
          mutationType: 'EDIT',
        },
      }}
    >
      <SimpleForm>
        <TextInput validate={required()} source="name" label="Name" />
      </SimpleForm>
    </Edit>
  );
};

export const PersonList = () => (
  <List empty={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PersonShow = () => (
  <Show
    actions={
      <TopToolbar>
        <DeleteButton />
      </TopToolbar>
    }
  >
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const Dashboard = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={raDataProvider}
      title="ra-data-provider-wrapper-examples"
    >
      <Resource
        name="persons"
        list={<PersonList />}
        create={<CreatePerson />}
        edit={<EditPerson />}
        show={<PersonShow />}
      />
      <Resource name="error" list={<ListGuesser />} />
    </Admin>
  );
};
