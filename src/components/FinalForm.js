import { Form, Field } from 'react-final-form';

const onSubmit = () => {
  console.log("I'm onSubmit FinalForm");
};

const FinalForm = (props) => {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, form, submitting, pristine }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" type="text" component="input" />
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                disabled={submitting || pristine}
                onClick={form.reset}
              >
                Reset
              </button>
            </div>
          </form>
        );
      }}
    </Form>
  );
};

export default FinalForm;
