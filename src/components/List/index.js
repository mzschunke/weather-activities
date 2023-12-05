import styles from "./List.module.css";
export default function List({ activities, weather, onDeleteActivity }) {
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
          <h2>🌤️ It's good weather in Europe:</h2>
          <ul className={styles["list"]}>
            {goodWeatherActivities.map((activity) => (
              <li key={activity.id} className={styles["item"]}>
                {activity.name} 👍
                <button>Delete </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>⛈️ It's bad weather in Europe:</h2>
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
    </>
  );
}
