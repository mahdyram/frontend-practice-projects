import { useEffect, useRef, useState } from "react";

export default function SelectCities({ originalCities, setOriginalCities }) {
  const [showCities, setShowCities] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState(originalCities);
  const [cityTags, setCityTags] = useState([]);
  const wrapperRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    const filtered = originalCities.filter(({ name }) =>
      name.startsWith(e.target.value.trim())
    );
    setCities(filtered);
  };

  const handleSelectCity = (name) => {
    setInputValue("");
    setOriginalCities((prevCities) =>
      prevCities.map((city) =>
        city.name === name ? { ...city, selected: !city.selected } : city
      )
    );
  };

  const handleDeselectCity = (name) => {
    setOriginalCities((prevCities) =>
      prevCities.map((city) =>
        city.name === name ? { ...city, selected: false } : city
      )
    );
  };

  useEffect(() => {
    setCities(originalCities);
    setCityTags(
      originalCities.filter(({ selected }) => selected).map((c) => c.name)
    );
  }, [originalCities]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current.contains(e.target)) {
        setShowCities(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", width: "460px", margin: "auto" }}
    >
      <h1>SelectCities</h1>

      <div className="container">
        <div className="cityTags">
          {cityTags.map((name) => (
            <span
              key={name}
              className="cityTag"
              onClick={() => handleDeselectCity(name)}
            >
              {name}
            </span>
          ))}
        </div>

        <input
          type="text"
          placeholder={`\u202Bنام شهر...\u202C`}
          className="selectInput"
          onFocus={() => setShowCities(true)}
          value={inputValue}
          onChange={handleChange}
        />
        <br />
      </div>

      <p>{inputValue}</p>

      {showCities && (
        <ul className="popupList">
          {cities.map(({ name, selected }) => (
            <li
              key={name}
              onClick={() => handleSelectCity(name, selected)}
              className={selected ? "selectedCity" : ""}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
