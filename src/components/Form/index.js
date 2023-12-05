export default function SearchForm({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { name, checkbox } = event.target.elements;
    const data = { name: name.value, isForGoodWeather: checkbox.checked };
    console.log("Newly added:", data);
    onAddActivity(data);
    event.target.reset();
  }

  return (
    <div>
      <h1>Add new Activity:</h1>
      <form data-js="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name"></input>
        <label htmlFor="checkbox">Good-weather activity:</label>
        <input type="checkbox" name="checkbox"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
