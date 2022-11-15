import FilterIcon from "../assets/Logos/filter-icon.svg";

const PlacesNavBar = () => {
  const placelist = [
    "Restaurant",
    "Cottage",
    "Castle",
    "fantast city",
    "beach",
    "Carbins",
    "Off-grid",
    "Farm",
  ];

  return (
    <nav className="places-nav">
      <div className="places">
        {placelist.map((place) => {
          return <span className="place">{place}</span>;
        })}

        <span className="place location">
          Location <img src={FilterIcon} />{" "}
        </span>
      </div>
    </nav>
  );
};

export default PlacesNavBar;
