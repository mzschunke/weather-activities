import style from "./Form.module.css";
export default function SearchForm({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { name, checkbox } = event.target.elements;
    const data = { name: name.value, isForGoodWeather: checkbox.checked };
    onAddActivity(data);
    event.target.reset();
  }

  return (
    <div>
      <h2>Add new Activity:</h2>
      <form data-js="form" onSubmit={handleSubmit} className={style["form"]}>
        <label htmlFor="name">Name:</label>
        <input name="name"></input>
        <div>
          <label htmlFor="checkbox">Good-weather activity:</label>
          <input type="checkbox" name="checkbox"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
