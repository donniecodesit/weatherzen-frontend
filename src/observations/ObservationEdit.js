import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createObservation } from "../utils/api"
import ErrorAlert from "../layout/ErrorAlert";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ObservationForm from "./ObservationForm";
import { useEffect } from "react/cjs/react.development";
import { readObservation, updateObservation } from "../utils/api";

export default function ObservationCreate() {
  const history = useHistory();
  const { observationId } = useParams();
  const [err, setErr] = useState(null);
  const [observation, setObservation] = useState({
        latitude: "",
        longitude: "",
        air_temperature: "",
        air_temperature_unit: "C",
        sky_condition: "",
  });

  useEffect(() => {
      const abortSwitch = new AbortController();
      async function loadObservation() {
          const observationFromApi = await readObservation(observationId, abortSwitch.signal);
          setObservation(observationFromApi);
          return () => abortSwitch.abort();
      }
      loadObservation();
  }, [observationId])

  function cancelHandler() {
    history.push("/");
  }

  async function submitHandler(event) {
    event.preventDefault();
    await updateObservation(observation);
    history.push("/");
  }

  function changeHandler({ target: { name, value } }) {
      setObservation((prev) => ({
          ...prev, [name]: value
      }));
  }

  return (
    <main>
        <h1 className="mb-3">Edit Observation: {observationId}</h1>
        <ErrorAlert error={err} />
        <ObservationForm observationData={observation} changeHandler={changeHandler} submitHandler={submitHandler} cancelHandler={cancelHandler}/>
    </main>
  );
}