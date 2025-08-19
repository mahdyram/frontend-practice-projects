import { useState } from "react";
import SelectCities from "./components/SelectCities";

function App() {
  const [originalCities, setOriginalCities] = useState([
    { name: "تهران", selected: false },
    { name: "مشهد", selected: false },
    { name: "اصفهان", selected: false },
    { name: "کرج", selected: false },
    { name: "شیراز", selected: false },
    { name: "تبریز", selected: false },
    { name: "قم", selected: false },
    { name: "اهواز", selected: false },
    { name: "کرمانشاه", selected: false },
    { name: "ارومیه", selected: false },
    { name: "رشت", selected: false },
    { name: "کرمان", selected: false },
    { name: "یزد", selected: false },
    { name: "بندرعباس", selected: false },
    { name: "قزوین", selected: false },
  ]);

  return (
    <SelectCities
      originalCities={originalCities}
      setOriginalCities={setOriginalCities}
    />
  );
}

export default App;
