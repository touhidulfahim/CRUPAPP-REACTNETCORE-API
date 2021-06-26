import React, { useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import * as actions from "../redux/actionCreator";
import ControlForm from "./ControlForm";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";

const mapStateToProps = (state) => ({
  employeeList: state.employeeReducer.employee,
});

const mapDispatchToProps = {
  createEmployee: actions.addEmployee,
  editEmployee: actions.updateEmployee,
};

const initialFieldValues = {
  name: "",
  designation: "",
  department: "",
  age: "",
  joiningDate: "",
  salary: "",
};

const EmployeeForm = ({ classess, ...props }) => {
  const { addToast } = useToasts();
  const validate = (fieldValues = inputVal) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required";
    if ("designation" in fieldValues)
      temp.designation = fieldValues.designation
        ? ""
        : "This field is required";
    if ("department" in fieldValues)
      temp.department = fieldValues.department ? "" : "This field is required";
    if ("age" in fieldValues)
      temp.age = fieldValues.age ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    if (fieldValues == inputVal)
      return Object.values(temp).every((x) => x == "");
  };
  const {
    inputVal,
    setInputVal,
    errors,
    setErrors,
    inputChangeHandler,
    resetForm,
  } = ControlForm(initialFieldValues, validate, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const onSuccess = () => {
        resetForm();
        addToast("Submitted success", { appearance: "success" });
      };
      if (props.currentId == 0) props.createEmployee(inputVal, onSuccess);
      else props.editEmployee(props.currentId, inputVal, onSuccess);
    }
    //
  };

  useEffect(() => {
    if (props.currentId != 0) {
      setInputVal({
        ...props.employeeList.find((x) => x.sysId == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            id="employeeName"
            placeholder="Enter name"
            value={inputVal.name}
            onChange={inputChangeHandler}
            invalid={errors.name}
          />
          <FormFeedback>{errors.name}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Position</Label>
          <Input
            type="text"
            name="designation"
            id="designation"
            placeholder="Enter position"
            value={inputVal.designation}
            onChange={inputChangeHandler}
            invalid={errors.designation}
          />
          <FormFeedback>{errors.designation}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>department</Label>
          <Input
            type="text"
            name="department"
            id="department"
            placeholder="Enter name"
            value={inputVal.department}
            onChange={inputChangeHandler}
            invalid={errors.department}
          />
          <FormFeedback>{errors.department}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input
            type="text"
            name="age"
            id="age"
            placeholder="Enter age"
            value={inputVal.age}
            onChange={inputChangeHandler}
            invalid={errors.age}
          />
          <FormFeedback>{errors.age}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Joining Date</Label>
          <Input
            type="date"
            name="joiningDate"
            id="joiningDate"
            placeholder="Enter name"
            value={inputVal.joiningDate}
            onChange={inputChangeHandler}
            invalid={errors.joiningDate}
          />
          <FormFeedback>{errors.joiningDate}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Salary</Label>
          <Input
            type="text"
            name="salary"
            id="salary"
            placeholder="Enter name"
            value={inputVal.salary}
            onChange={inputChangeHandler}
            invalid={errors.salary}
          />
          <FormFeedback>{errors.salary}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <br />
          <Button type="submit" color="primary">
            Submit
          </Button>{" "}
          ||{" "}
          <Button color="secondary" onClick={resetForm}>
            Reset
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
