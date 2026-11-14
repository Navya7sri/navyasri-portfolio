
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const [error, setError] = useState('');

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!Object.values(form).every((v) => v.trim())) {
      setError('Please complete every field.');
      setStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!service || !template || !key) {
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

      window.location.href =
        `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;

      return;
    }

    try {
      setStatus('sending');

      await emailjs.send(
        service,
        template,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        key
      );

      setStatus('success');

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      setStatus('error');
      setError(
        'Something went wrong. Please email me directly instead.'
      );
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={submit}
      noValidate
    >
      <div className="form-grid">
        <label>
          Your name
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Jane Smith"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Email address
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            placeholder="jane@example.com"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label>
        Subject
        <input
          name="subject"
          value={form.subject}
          onChange={update}
          placeholder="A quick hello"
          required
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          rows={5}
          placeholder="Tell me a little about what you have in mind…"
          required
        />
      </label>

      <div className="form-submit-row">
        <button
          className="button button-primary"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending'
            ? 'Sending…'
            : status === 'success'
              ? <>Message sent <Check size={16} /></>
              : <>Send message <Send size={15} /></>}
        </button>

        <span className="form-note">
          I'll get back to you as soon as I can.
        </span>
      </div>

      {status === 'success' && (
        <p className="form-success">
          Thank you — your message has been sent.
        </p>
      )}

      {status === 'error' && (
        <p className="form-error">{error}</p>
      )}
    </form>
  );
}
