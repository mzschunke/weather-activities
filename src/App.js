import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import SearchForm from "./components/Form";
import List from "./components/List";

function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("europe");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${location}`
        );
        const data = await response.json();
        setWeather(data);
        // console.log("Weather updated:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, [location]);

  const [activities, setActivities] = useLocalStorageState(
    "activities",
    {
      defaultValue: [],
    },
    []
  );

  function handleAddActivity(newActivity) {
    const activityID = { ...newActivity, id: uid() };
    setActivities((prevActivities) => [...prevActivities, activityID]);
  }

  function handleDeleteActivity(id) {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  }

  function handleLocationChange(event) {
    setLocation(event.target.value.toLowerCase());
  }

  return (
    <>
      <div>
        <h1>Weather Activities App</h1>
      </div>
      <List
        activities={activities}
        weather={weather}
        onDeleteActivity={handleDeleteActivity}
        location={location}
        onLocationChange={handleLocationChange}
      />
      <SearchForm onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
