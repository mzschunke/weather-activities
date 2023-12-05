export default function List({ activities, weather }) {
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
          <h2>🌤️ Good weather - Activities:</h2>
          <ul>
            {goodWeatherActivities.map((activity) => (
              <li key={activity.id}>{activity.name} 👍</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>⛈️ Bad weather - Activities:</h2>
          <ul>
            {badWeatherActivities.map((activity) => (
              <li key={activity.id}>{activity.name} 👎</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
