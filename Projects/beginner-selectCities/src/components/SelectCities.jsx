import { useEffect, useRef, useState } from "react";

export default function SelectCities({ originalCities, setOriginalCities }) {
  const [showCities, setShowCities] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const wrapperRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleSelectCity = (name) => {
    setInputValue("");
    setOriginalCities((prevCities) =>
      prevCities.map((city) =>
        city.name === name ? { ...city, selected: !city.selected } : city
      )
    );
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setShowCities(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", width: "460px", margin: "auto" }}
    >
      <h1>SelectCities</h1>

      <div className="container">
        <div className="cityTags">
          {originalCities
            .filter(({ selected }) => selected)
            .map(({ name }) => (
              <span
                key={name}
                className="cityTag"
                onClick={() => toggleSelectCity(name)}
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
      <br />

      {showCities && (
        <ul className="popupList">
          {(inputValue.trim()
            ? originalCities.filter(({ name }) =>
                name.startsWith(inputValue.trim())
              )
            : originalCities
          ).map(({ name, selected }) => (
            <li
              key={name}
              onClick={() => toggleSelectCity(name)}
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
