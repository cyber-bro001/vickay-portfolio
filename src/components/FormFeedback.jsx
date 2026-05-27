import { CheckCircle, AlertCircle, LoaderCircle } from "lucide-react";

const FormFeedback = ({ isSubmitting, error, success }) => {
  if (isSubmitting) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-blue-400">
        <LoaderCircle className="h-5 w-5 animate-spin" />

        <p className="text-sm font-medium">Sending your message...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

        <div>
          <p className="text-sm font-semibold">Message failed</p>

          <p className="text-sm opacity-80">{error}</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-400">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />

        <div>
          <p className="text-sm font-semibold">Message sent successfully</p>

          <p className="text-sm opacity-80">
            Thanks for reaching out. I’ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default FormFeedback;
