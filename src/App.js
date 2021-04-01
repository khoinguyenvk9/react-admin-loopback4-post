import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { CommentList, CommentCreate, CommentEdit, CommentShow } from './components/comment';
import { UserList, UserCreate, UserEdit, UserShow } from './components/users';
import { authProvider } from './dataProvider/authProvider'
//import dataProvider from './myDataProvider';
import { dataProvider } from './dataProvider/iDataProvider';
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}></Resource>
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} show={UserShow}></Resource>
    <Resource name="comments" list={CommentList} create={CommentCreate} edit={CommentEdit} show={CommentShow}></Resource>
  </Admin>
)
export default App;