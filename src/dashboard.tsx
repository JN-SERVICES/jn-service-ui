import {
  Admin,
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  Resource,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  TopToolbar,
  required,
} from 'react-admin';
import { v4 as uuid } from 'uuid';

import { LoginPage } from './security/components';
import { raDataProvider, authProvider } from './providers';
import { Jnlayout } from './layout/jnlayout';
import { mainTheme } from './jnthemes';

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
      layout={Jnlayout}
      title="jn-services"
      authProvider={authProvider}
      dataProvider={raDataProvider}
      loginPage={LoginPage}
      theme={mainTheme}
    >
      <Resource
        name="persons"
        options={{ label: 'Utilisateurs' }}
        list={<PersonList />}
        create={<CreatePerson />}
        edit={<EditPerson />}
        show={<PersonShow />}
      />
    </Admin>
  );
};
