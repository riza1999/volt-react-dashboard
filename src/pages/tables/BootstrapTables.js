
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Button } from '@themesberg/react-bootstrap';

import { PageTrafficTable, RankingTable } from "../../components/Tables";


export default () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item active>User Management</Breadcrumb.Item>
          </Breadcrumb>
          <h4>User Management</h4>
          <p className="mb-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </div>
      </div>

      <div className="d-xl-flex justify-content-end flex-wrap flex-md-nowrap align-items-center py-1">
        <Button variant="primary" size="sm" className="m-1"><FontAwesomeIcon icon={faPlus} /> Add</Button>
      </div>

      {/* <PageTrafficTable /> */}
      <RankingTable />
    </>
  );
};
