import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CountyList } from "./county/CountyList";
import { CountyCreate } from "./county/CountyCreate";
import { CountyEdit } from "./county/CountyEdit";
import { CountyShow } from "./county/CountyShow";
import { VendorList } from "./vendor/VendorList";
import { VendorCreate } from "./vendor/VendorCreate";
import { VendorEdit } from "./vendor/VendorEdit";
import { VendorShow } from "./vendor/VendorShow";
import { ExpenseList } from "./expense/ExpenseList";
import { ExpenseCreate } from "./expense/ExpenseCreate";
import { ExpenseEdit } from "./expense/ExpenseEdit";
import { ExpenseShow } from "./expense/ExpenseShow";
import { CertificationList } from "./certification/CertificationList";
import { CertificationCreate } from "./certification/CertificationCreate";
import { CertificationEdit } from "./certification/CertificationEdit";
import { CertificationShow } from "./certification/CertificationShow";
import { ComponentList } from "./component/ComponentList";
import { ComponentCreate } from "./component/ComponentCreate";
import { ComponentEdit } from "./component/ComponentEdit";
import { ComponentShow } from "./component/ComponentShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { DispositionList } from "./disposition/DispositionList";
import { DispositionCreate } from "./disposition/DispositionCreate";
import { DispositionEdit } from "./disposition/DispositionEdit";
import { DispositionShow } from "./disposition/DispositionShow";
import { StorageLocationList } from "./storageLocation/StorageLocationList";
import { StorageLocationCreate } from "./storageLocation/StorageLocationCreate";
import { StorageLocationEdit } from "./storageLocation/StorageLocationEdit";
import { StorageLocationShow } from "./storageLocation/StorageLocationShow";
import { InventoryUnitList } from "./inventoryUnit/InventoryUnitList";
import { InventoryUnitCreate } from "./inventoryUnit/InventoryUnitCreate";
import { InventoryUnitEdit } from "./inventoryUnit/InventoryUnitEdit";
import { InventoryUnitShow } from "./inventoryUnit/InventoryUnitShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"server"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="County"
          list={CountyList}
          edit={CountyEdit}
          create={CountyCreate}
          show={CountyShow}
        />
        <Resource
          name="Vendor"
          list={VendorList}
          edit={VendorEdit}
          create={VendorCreate}
          show={VendorShow}
        />
        <Resource
          name="Expense"
          list={ExpenseList}
          edit={ExpenseEdit}
          create={ExpenseCreate}
          show={ExpenseShow}
        />
        <Resource
          name="Certification"
          list={CertificationList}
          edit={CertificationEdit}
          create={CertificationCreate}
          show={CertificationShow}
        />
        <Resource
          name="Component"
          list={ComponentList}
          edit={ComponentEdit}
          create={ComponentCreate}
          show={ComponentShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Disposition"
          list={DispositionList}
          edit={DispositionEdit}
          create={DispositionCreate}
          show={DispositionShow}
        />
        <Resource
          name="StorageLocation"
          list={StorageLocationList}
          edit={StorageLocationEdit}
          create={StorageLocationCreate}
          show={StorageLocationShow}
        />
        <Resource
          name="InventoryUnit"
          list={InventoryUnitList}
          edit={InventoryUnitEdit}
          create={InventoryUnitCreate}
          show={InventoryUnitShow}
        />
      </Admin>
    </div>
  );
};

export default App;
