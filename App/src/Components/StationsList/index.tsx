import { useSelector } from "react-redux";
import RadioStation from "../../Types/Responses/RadioStation/InterfaceRadioStation";
import { ListOfStations } from "../../Libs/Redux/slices/stationsList";
import { PlayPauseButton } from "../PlayPauseButton";
import { DotsMenu } from "../DotsMenu";

export const StationsList = () => {
  
    const StationList: RadioStation[] = useSelector(ListOfStations);
  
    return (
    <ul className="container-md d-flex flex-column stationsList">
      {StationList &&
        StationList.map((station) => {
          return (
            <li
              className="row text-white p-2 d-flex align-items-center"
              style={{ height: "120px" }}
              key={station.stationuuid}
            >
              <PlayPauseButton className="col-md-1 col-2" />
              <div className="col-md-10 col-8 flex-fill d-flex flex-column gap-1">
                <h5 className="mb-0">{station.name}</h5>
                <div className="row d-flex ">
                  <span className="col-1">{station.countrycode}</span>
                  <span className="col-1">
                    {station.state && station.state}
                  </span>
                </div>
                <span>{station.tags && station.tags}</span>
              </div>
              <DotsMenu className="col-md-1 col-2" />
            </li>
          );
        })}
    </ul>
  );
};
