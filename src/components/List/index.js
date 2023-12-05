export default function List({ activities, weather }) {
  return (
    <>
      <h2>
        {weather.isGoodWeather
          ? "Good weather Activities:"
          : "Bad weather Activities:"}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            {activity.isForGoodWeather ? " 👍" : " 👎"}
          </li>
        ))}
      </ul>
    </>
  );
}
