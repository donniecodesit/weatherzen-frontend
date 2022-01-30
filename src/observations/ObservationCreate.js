import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createObservation } from "../utils/api"
import ErrorAlert from "../layout/ErrorAlert";
import ObservationForm from "./ObservationForm";

export default function ObservationCreate() {
  const history = useHistory();
  const [err, setErr] = useState(null);
  const [observation, setObservation] = useState({
      latitude: "",
      longitude: "",
      air_temperature: "",
      air_temperature_unit: "C",
      sky_condition: "",
  });

  function cancelHandler() {
    history.push("/");
  }

  function submitHandler(event) {
    event.preventDefault();
    createObservation(observation)
        .then(() => {history.push("/")})
        .catch(setErr);
  }

  function changeHandler({ target: { name, value } }) {
      setObservation((prev) => ({
          ...prev, [name]: value
      }));
      
  }

  return (
    <main>
        <h1 className="mb-3">Create Observation</h1>
        <ErrorAlert error={err} />
        <ObservationForm observationData={observation} changeHandler={changeHandler} submitHandler={submitHandler} cancelHandler={cancelHandler}/>
    </main>
  );
}