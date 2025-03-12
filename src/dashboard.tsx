import {
  Admin,
  Create,
  CustomRoutes,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  ListGuesser,
  Resource,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  TopToolbar,
  required,
} from 'react-admin';
import { Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { LoginPage } from './security/components';
import { raDataProvider, authProvider } from './providers';
import { HomePage } from './operations/home';
import { CompleteInfosPages } from './operations/complete-infos';

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
      title="jn-services"
      dashboard={HomePage}
      loginPage={LoginPage}
      authProvider={authProvider}
      dataProvider={raDataProvider}
    >
      <Resource
        name="persons"
        list={<PersonList />}
        create={<CreatePerson />}
        edit={<EditPerson />}
        show={<PersonShow />}
      />
      <Resource name="error" list={<ListGuesser />} />
      <CustomRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-infos" element={<CompleteInfosPages />} />
      </CustomRoutes>
    </Admin>
  );
};
