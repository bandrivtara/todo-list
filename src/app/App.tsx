import React from 'react';
import '../assets/scss/App.scss';
import {Layout} from "../shared/components/Layout";
import {AuthContainer} from "./auth/AuthContainer";

export function App() {
  return (
    <Layout>
        <AuthContainer/>
    </Layout>
  );
}
