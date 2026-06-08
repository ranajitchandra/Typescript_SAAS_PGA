import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

type SignInForm = {
    email: string;
    password: string;
};

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<SignInForm>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = (data: SignInForm) => {
        setSuccessMessage(`Welcome back, ${data.email}. Your sign in form is ready to connect.`);
    };

    return (
        <section className="mx-auto grid max-w-5xl items-center gap-8 py-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
                <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                    Member access
                </span>
                <div>
                    <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                        Sign in to BookSealer.
                    </h1>
                    <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
                        Manage your saved books, listings, seller messages, and marketplace profile from one place.
                    </p>
                </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 text-card-foreground shadow-xl shadow-primary/5 md:p-8">
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
                        <label className="text-sm font-semibold" htmlFor="email">
                            Email address
                        </label>
                        <div className="mt-2 flex items-center gap-3 rounded-xl border bg-background px-4 focus-within:ring-2 focus-within:ring-ring/50">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <input
                                id="email"
                                type="email"
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="you@example.com"
                                aria-invalid={Boolean(errors.email)}
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address.",
                                    },
                                })}
                            />
                        </div>
                        {errors.email ? <p className="mt-2 text-sm text-destructive">{errors.email.message}</p> : null}
                    </div>

                    <div>
                        <div className="flex items-center justify-between gap-3">
                            <label className="text-sm font-semibold" htmlFor="password">
                                Password
                            </label>
                            <Link className="text-sm font-semibold text-primary hover:underline" to="/forgot-password">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="mt-2 flex items-center gap-3 rounded-xl border bg-background px-4 focus-within:ring-2 focus-within:ring-ring/50">
                            <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="Enter your password"
                                aria-invalid={Boolean(errors.password)}
                                {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters.",
                                    },
                                })}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((current) => !current)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                title={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                        {errors.password ? <p className="mt-2 text-sm text-destructive">{errors.password.message}</p> : null}
                    </div>

                    {successMessage ? (
                        <p className="rounded-xl border border-accent/30 bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground">
                            {successMessage}
                        </p>
                    ) : null}

                    <button
                        type="submit"
                        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                    New to BookSealer?{" "}
                    <Link className="font-semibold text-primary hover:underline" to="/auth/sign-up">
                        Create an account
                    </Link>
                </p>
            </div>
        </section>
    );
}
