import React, { useState, useEffect } from "react";
import * as action from "../redux/actionCreator";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import EmployeeForm from "./EmployeeForm";

const mapStateToProps = (state) => ({
  employeeList: state.employeeReducer.employee,
});
const mapActionToProps = {
  fetchEmployee: action.getEmployeeList,
};
const EmployeeList = (props) => {
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    props.fetchEmployee();
  }, []);

  const { addToast } = useToasts();
  const removeEmployee = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      props.deleteRecord(id, () =>
        addToast("Successfully deleted", { appearance: "info" })
      );
    }
  };
  return (
    <div>
      <div className="row col-12" style={{ marginTop: "30px" }}>
        <div className="col-md-4">
          <EmployeeForm {...{ currentId, setCurrentId }} />
        </div>
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-bordered table-sm">
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
              <tbody>
                {props.employeeList.map((record, index) => {
                  return (
                    <tr key={record.sysId}>
                      <td>{record.name}</td>
                      <td>{record.designation}</td>
                      <td>{record.department}</td>
                      <td>{record.age}</td>
                      <td>{record.joiningDate.toString("DDD MMM yy")}</td>
                      <td>{record.salary}</td>
                      <td>
                        <a
                          className="btn btn-warning btn-sm"
                          onClick={() => setCurrentId(record.sysId)}
                        >
                          <i className="fa fa-pencil-square-o fa-1x"></i> Edit
                        </a>
                        |
                        <a
                          className="btn btn-danger btn-sm"
                          onClick={() => removeEmployee(record.sysId)}
                        >
                          <i
                            className="fa fa-trash-o fa-1x"
                            aria-hidden="true"
                          ></i>
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapActionToProps)(EmployeeList);
