

const FormFeedback = ({ isSubmitting, error, success }) => {
  if (isSubmitting) {
    return <p className="text-blue-500">Sending message...</p>;
  }
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  if (success) {
    return <p className="text-green-500">Message sent successfully!</p>;
  }
  return null;
};

export default FormFeedback;    