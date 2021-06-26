import React, { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

const Employee = (props) => {
  const [currentId, setCurrentId] = useState(0);
  return (
    <div>
      <div className="row col-12" style={{ marginTop: "30px" }}>
        <div className="col-md-4">
          <EmployeeForm {...{ currentId, setCurrentId }} />
        </div>
        <div className="col-md-8">
          <EmployeeList />
        </div>
      </div>
    </div>
  );
};

export default Employee;
