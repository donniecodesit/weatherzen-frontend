import { useEffect, useState } from "react";
import { listObservations } from "../utils/api";
import { Link } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";

export default function Home() {
  const [observations, setObservations] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    listObservations(abortController.signal)
      .then(setObservations)
      .catch(setErr);
    return () => abortController.abort();
  }, []);

  const tableRows = observations.map((obs) => (
    <tr key={obs.observation_id}>
      <th scope="row">{obs.observation_id}</th>
      <td>{obs.latitude}</td>
      <td>{obs.longitude}</td>
      <td>{obs.air_temperature}</td>
      <td>{obs.air_temperature_unit}</td>
      <td>{obs.sky_condition}</td>
      <td>{obs.created_at}</td>
      <Link to={`observations/edit/${obs.observation_id}`}>
        <button className="btn btn-primary ml-4">Edit</button>
      </Link>
    </tr>
  ));

  return (
    <main>
      <h1>Home</h1>
      <ErrorAlert error={err} />
      <table className="table">
        <thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Latitude</th>
          <th scope="col">Longitude</th>
          <th scope="col">Temperature</th>
          <th scope="col">Unit</th>
          <th scope="col">Sky Condition</th>
          <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </main>
  );
}