import styles from "./Form.module.css";
export default function SearchForm({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { name, checkbox } = event.target.elements;
    const data = { name: name.value, isForGoodWeather: checkbox.checked };
    onAddActivity(data);
    event.target.reset();
  }

  return (
    <>
      <h2 className={styles["title"]}>Add new Activity:</h2>
      <div className={styles["form-container"]}>
        <form data-js="form" onSubmit={handleSubmit} className={styles["form"]}>
          <label htmlFor="name">Name:</label>
          <input name="name" required></input>
          <div>
            <label htmlFor="checkbox">Good-weather activity:</label>
            <input type="checkbox" name="checkbox"></input>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}
