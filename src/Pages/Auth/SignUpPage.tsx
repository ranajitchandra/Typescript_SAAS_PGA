import { Eye, EyeOff, LockKeyhole, Mail, MapPin, Phone, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

type SignUpForm = {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const {
        formState: { errors },
        getValues,
        handleSubmit,
        register,
    } = useForm<SignUpForm>({
        defaultValues: {
            acceptTerms: false,
            confirmPassword: "",
            email: "",
            fullName: "",
            location: "",
            password: "",
            phone: "",
        },
        mode: "onBlur",
    });

    const onSubmit = (data: SignUpForm) => {
        setSuccessMessage(`Account profile created for ${data.fullName}. Backend connection can be added next.`);
    };

    return (
        <section className="mx-auto max-w-5xl py-8">
            <div className="grid gap-8 rounded-3xl border bg-secondary p-5 md:grid-cols-[0.8fr_1.2fr] md:p-8">
                <div className="flex flex-col justify-between gap-8">
                    <div>
                        <span className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                            Seller profile
                        </span>
                        <h1 className="mt-5 text-4xl font-bold text-secondary-foreground md:text-5xl">
                            Create your BookSealer account.
                        </h1>
                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                            Add the details buyers need to trust your listings and reach you quickly.
                        </p>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 text-card-foreground">
                        <p className="text-sm font-semibold">Profile includes</p>
                        <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                            <span>Verified email for account access</span>
                            <span>Phone and location for buyer contact</span>
                            <span>Password validation before submit</span>
                        </div>
                    </div>
                </div>

                <form className="rounded-2xl border bg-card p-5 shadow-xl shadow-primary/5 md:p-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid gap-5 md:grid-cols-2">
                        <FieldWrapper label="Full name" error={errors.fullName?.message}>
                            <UserRound className="h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="Your name"
                                {...register("fullName", {
                                    required: "Full name is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Name must be at least 3 characters.",
                                    },
                                })}
                            />
                        </FieldWrapper>

                        <FieldWrapper label="Email address" error={errors.email?.message}>
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <input
                                type="email"
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="you@example.com"
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address.",
                                    },
                                })}
                            />
                        </FieldWrapper>

                        <FieldWrapper label="Phone number" error={errors.phone?.message}>
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <input
                                type="tel"
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="01XXXXXXXXX"
                                {...register("phone", {
                                    required: "Phone number is required.",
                                    pattern: {
                                        value: /^01[3-9]\d{8}$/,
                                        message: "Enter a valid Bangladesh phone number.",
                                    },
                                })}
                            />
                        </FieldWrapper>

                        <FieldWrapper label="Location" error={errors.location?.message}>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="Dhaka, Bangladesh"
                                {...register("location", {
                                    required: "Location is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Location must be at least 3 characters.",
                                    },
                                })}
                            />
                        </FieldWrapper>

                        <FieldWrapper label="Password" error={errors.password?.message}>
                            <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="Create password"
                                {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters.",
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d).+$/,
                                        message: "Use at least one uppercase letter and one number.",
                                    },
                                })}
                            />
                            <PasswordToggle showPassword={showPassword} onToggle={() => setShowPassword((current) => !current)} />
                        </FieldWrapper>

                        <FieldWrapper label="Confirm password" error={errors.confirmPassword?.message}>
                            <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                                placeholder="Repeat password"
                                {...register("confirmPassword", {
                                    required: "Confirm your password.",
                                    validate: (value) => value === getValues("password") || "Passwords do not match.",
                                })}
                            />
                        </FieldWrapper>
                    </div>

                    <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
                        <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 rounded border-input accent-[var(--accent)]"
                            {...register("acceptTerms", {
                                required: "Please accept the account terms.",
                            })}
                        />
                        <span>I agree to keep my listings honest and my contact information accurate.</span>
                    </label>
                    {errors.acceptTerms ? <p className="mt-2 text-sm text-destructive">{errors.acceptTerms.message}</p> : null}

                    {successMessage ? (
                        <p className="mt-5 rounded-xl border border-accent/30 bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground">
                            {successMessage}
                        </p>
                    ) : null}

                    <button
                        type="submit"
                        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Sign Up
                    </button>

                    <p className="mt-5 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link className="font-semibold text-primary hover:underline" to="/sign-in">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

function FieldWrapper({
    children,
    error,
    label,
}: {
    children: ReactNode;
    error?: string;
    label: string;
}) {
    return (
        <label className="block text-sm font-semibold text-card-foreground">
            {label}
            <span className="mt-2 flex items-center gap-3 rounded-xl border bg-background px-4 focus-within:ring-2 focus-within:ring-ring/50">
                {children}
            </span>
            {error ? <span className="mt-2 block text-sm font-normal text-destructive">{error}</span> : null}
        </label>
    );
}

function PasswordToggle({ onToggle, showPassword }: { onToggle: () => void; showPassword: boolean }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label={showPassword ? "Hide password" : "Show password"}
            title={showPassword ? "Hide password" : "Show password"}
        >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
    );
}
