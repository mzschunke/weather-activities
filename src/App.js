import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import SearchForm from "./components/Form";
import List from "./components/List";

function App() {
  const [weather, setWeather] = useState([]);
  async function fetchData() {
    const response = await fetch(
      "https://example-apis.vercel.app/api/weather/europe"
    );
    const data = await response.json();
    setWeather(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    console.log("weather", weather);
  }, [weather]);

  function handleAddActivity(newActivity) {
    const activityID = { ...newActivity, id: uid() };
    setActivities((prevActivities) => [...prevActivities, activityID]);
  }

  return (
    <>
      <div>
        <p>Weather Activities App</p>
      </div>
      <SearchForm onAddActivity={handleAddActivity} />
      <List activities={activities} weather={weather} />
    </>
  );
}

export default App;
