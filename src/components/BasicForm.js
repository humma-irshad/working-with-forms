import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fNameInput,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lNameInput,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log("Submitted!");
    console.log(fNameInput, lNameInput, emailInput);
    fNameInputReset();
    lNameInputReset();
    resetEmail();
  };

  let fNameInputClass = fNameHasError ? "form-control invalid" : "form-control";
  let lNameInputClass = lNameHasError ? "form-control invalid" : "form-control";
  let emailInputClass = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameInputClass}>
          <label htmlFor="name">First Name</label>
          {fNameHasError && (
            <p className="error-text">Enter a valid first name</p>
          )}
          <input
            type="text"
            id="name"
            value={fNameInput}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
        </div>
        <div className={lNameInputClass}>
          <label htmlFor="name">Last Name</label>
          {lNameHasError && (
            <p className="error-text">Enter a valid last name</p>
          )}
          <input
            type="text"
            id="name"
            value={lNameInput}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        {emailHasError && (
          <p className="error-text">Enter a valid e-mail address</p>
        )}
        <input
          type="text"
          id="name"
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
