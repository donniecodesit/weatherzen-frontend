export default function ObservationForm({ observationData, changeHandler, submitHandler, cancelHandler }) {
    return (
        <form onSubmit={submitHandler} className="mb-4">
            <div className="row mb-3">
                <div className="col-6 form-group">
                    <label className="form-label" htmlFor="latitude">Latitude</label>
                    <input className="form-control" id="latitude" name="latitude" type="number" max="90" min="-90" value={observationData.latitude} onChange={changeHandler} required={true} />
                    <small className="form-text text-muted">Enter a value between -90 and 90.</small>
                </div>
                <div className="col-6">
                    <label className="form-label" htmlFor="longitude">Longitude</label>
                    <input className="form-control" id="longitude" name="longitude" type="number" max="180" min="-180" value={observationData.longitude} onChange={changeHandler} required={true} />
                    <small className="form-text text-muted">Enter a value between -180 and 180.</small>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6 form-group">
                    <label className="form-label" htmlFor="cloudCover"> Sky Conditions</label>
                    <select className="form-control" id="sky_condition" name="sky_condition" value={observationData.sky_condition} onChange={changeHandler} required={true}>
                        <option value="">Select a sky condition option</option>
                        <option value="100">Cloudless</option>
                        <option value="101">Some clouds</option>
                        <option value="102">Cloud covered</option>
                        <option value="103">Foggy</option>
                        <option value="104">Raining</option>
                        <option value="106">Snowing</option>
                        <option value="108">Hailing</option>
                        <option value="109">Thunderstorms</option>
                    </select>
                </div>
                <div className="col-4">
                    <label className="form-label" htmlFor="temperature">Temperature</label>
                    <input className="form-control" 
                        id="air_temperature" 
                        name="air_temperature" 
                        type="number" 
                        max={(observationData.air_temperature_unit == "F" ? "224" : "107")} 
                        min={(observationData.air_temperature_unit == "F" ? "-60" : "-50")} 
                        value={observationData.air_temperature} 
                        onChange={changeHandler} 
                        required={true} />
                    <small className="form-text text-muted">Enter a value between {(observationData.air_temperature_unit == "F" ? "-60" : "-50")}  and {(observationData.air_temperature_unit == "F" ? "224" : "107")}.</small>
                </div>
                <div className="col-2">
                    <label className="form-label" htmlFor="unit">Unit</label>
                    <select className="form-control" id="air_temperature_unit" name="air_temperature_unit" value={observationData.air_temperature_unit} onChange={changeHandler} required={true}>
                        <option value="C">Celsius</option>
                        <option value="F">Farenheit</option>
                    </select>
                </div>
            </div>
            <button type="button" className="btn btn-secondary mr-2" onClick= {cancelHandler}>Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}