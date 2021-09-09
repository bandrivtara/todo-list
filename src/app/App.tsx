import React from 'react';
import '../assets/scss/App.scss';
import {AuthContainer} from "./auth/AuthContainer";
import {TasksListsListContainer} from "./base/TasksListsList/TasksListsListContainer";
import {Layout} from "./Layout";

export function App() {
  return (
    <Layout>
        <AuthContainer/>
    </Layout>
  );
}
