import './Form.css'

interface Props {
    onSubmit(formData: FormData): void
}

const Form = ({ onSubmit }: Props) => {
    return (
        <div className="py-5">
            <h1 className="text-3xl mb-8">Enter your details</h1>
            <form
                className="flex flex-col gap-4"
                onSubmit={e => {
                    e.preventDefault()
                    onSubmit(new FormData(e.currentTarget))
                }}
            >
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="text-xl border border-slate-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="text-xl border border-slate-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="text-xl border border-slate-500"
                        required
                    />
                </div>
                <button className="bg-slate-200 mt-4 hover:brightness-95">
                    Place order
                </button>
            </form>
        </div>
    )
}

export default Form
