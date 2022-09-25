import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== ""); // function definition

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) return;

    console.log(enteredName);

    resetNameInput();
  };

  let fNameClass = nameInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={fNameClass}>
        <label htmlFor="name">Your Name</label>
        {nameInputHasError && (
          <p className="error-text">Please enter a valid (non-empty) value</p>
        )}
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
