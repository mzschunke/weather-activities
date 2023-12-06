import styles from "./List.module.css";
export default function List({
  activities,
  weather,
  onDeleteActivity,
  location,
  onLocationChange,
}) {
  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather
  );
  const badWeatherActivities = activities.filter(
    (activity) => !activity.isForGoodWeather
  );
  return (
    <>
      {weather.isGoodWeather ? (
        <>
          <h2 className={styles["title"]}>
            Current weather in {location.charAt(0).toUpperCase()}
            {location.slice(1)}:
          </h2>
          <div className={styles["weather-container"]}>
            <p>{weather.temperature}°C</p>
            <p>{weather.condition}</p>
          </div>
          <p>Good Weather Activities:</p>
          <ul className={styles["list"]}>
            {goodWeatherActivities.map((activity) => (
              <li key={activity.id} className={styles["item"]}>
                {activity.name} 👍
                <button
                  onClick={() => onDeleteActivity(activity.id)}
                  className={styles["button"]}
                >
                  Delete{" "}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className={styles["title"]}>
            {" "}
            Current weather in {location.charAt(0).toUpperCase()}
            {location.slice(1)}:
          </h2>
          <div className={styles["weather-container"]}>
            <p>{weather.temperature}°C</p>
            <p>{weather.condition}</p>
          </div>
          <p>Bad Weather Activities:</p>
          <ul className={styles["list"]}>
            {badWeatherActivities.map((activity) => (
              <li key={activity.id} className={styles["item"]}>
                {activity.name} 👎
                <button
                  onClick={() => onDeleteActivity(activity.id)}
                  className={styles["button"]}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className={styles["select-container"]}>
        <label htmlFor="location">Change Location:</label>
        <select name="location" onChange={onLocationChange}>
          <option>Europe</option>
          <option>Arctic</option>
          <option>Sahara</option>
          <option>Rainforest</option>
        </select>
      </div>
    </>
  );
}
