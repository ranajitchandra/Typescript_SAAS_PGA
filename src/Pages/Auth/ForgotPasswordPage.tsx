import { CheckCircle2, KeyRound, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { Link } from "react-router";

type ForgotPasswordForm = {
    email: string;
    otp: string;
    password: string;
    confirmPassword: string;
};

type RecoveryStep = "email" | "otp" | "reset" | "done";

export default function ForgotPasswordPage() {
    const [step, setStep] = useState<RecoveryStep>("email");
    const {
        formState: { errors },
        getValues,
        handleSubmit,
        register,
        trigger,
    } = useForm<ForgotPasswordForm>({
        defaultValues: {
            confirmPassword: "",
            email: "",
            otp: "",
            password: "",
        },
        mode: "onBlur",
    });

    const requestOtp = async () => {
        const valid = await trigger("email");

        if (valid) {
            setStep("otp");
        }
    };

    const verifyOtp = async () => {
        const valid = await trigger("otp");

        if (valid) {
            setStep("reset");
        }
    };

    const resetPassword = () => {
        setStep("done");
    };

    return (
        <section className="mx-auto max-w-2xl py-8">
            <div className="rounded-3xl border bg-card p-6 text-card-foreground shadow-xl shadow-primary/5 md:p-8">
                <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                    Password recovery
                </span>
                <h1 className="mt-5 text-4xl font-bold text-foreground">Reset your password.</h1>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                    Validate your email, confirm the OTP, then create a fresh password.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-xs font-semibold">
                    <StepBadge active={step === "email"} completed={step !== "email"} label="Email" />
                    <StepBadge active={step === "otp"} completed={step === "reset" || step === "done"} label="OTP" />
                    <StepBadge active={step === "reset" || step === "done"} completed={step === "done"} label="Reset" />
                </div>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit(resetPassword)} noValidate>
                    {step === "email" ? (
                        <div>
                            <label className="text-sm font-semibold" htmlFor="recovery-email">
                                Email address
                            </label>
                            <div className="mt-2 flex items-center gap-3 rounded-xl border bg-background px-4 focus-within:ring-2 focus-within:ring-ring/50">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <input
                                    id="recovery-email"
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
                            </div>
                            {errors.email ? <p className="mt-2 text-sm text-destructive">{errors.email.message}</p> : null}
                            <button
                                type="button"
                                onClick={requestOtp}
                                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                            >
                                Send OTP
                            </button>
                        </div>
                    ) : null}

                    {step === "otp" ? (
                        <div>
                            <label className="text-sm font-semibold" htmlFor="otp">
                                Enter OTP
                            </label>
                            <div className="mt-2 flex items-center gap-3 rounded-xl border bg-background px-4 focus-within:ring-2 focus-within:ring-ring/50">
                                <KeyRound className="h-4 w-4 text-muted-foreground" />
                                <input
                                    id="otp"
                                    type="text"
                                    inputMode="numeric"
                                    className="h-12 w-full bg-transparent text-sm tracking-[0.3em] outline-none placeholder:tracking-normal placeholder:text-muted-foreground"
                                    placeholder="6 digit code"
                                    maxLength={6}
                                    {...register("otp", {
                                        required: "OTP is required.",
                                        pattern: {
                                            value: /^\d{6}$/,
                                            message: "OTP must be exactly 6 digits.",
                                        },
                                    })}
                                />
                            </div>
                            {errors.otp ? <p className="mt-2 text-sm text-destructive">{errors.otp.message}</p> : null}
                            <p className="mt-3 text-sm text-muted-foreground">
                                Demo OTP validation accepts any 6 digit code for {getValues("email")}.
                            </p>
                            <button
                                type="button"
                                onClick={verifyOtp}
                                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                            >
                                Verify OTP
                            </button>
                        </div>
                    ) : null}

                    {step === "reset" ? (
                        <div className="space-y-5">
                            <PasswordField
                                error={errors.password?.message}
                                label="New password"
                                registerProps={register("password", {
                                    required: "New password is required.",
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
                            <PasswordField
                                error={errors.confirmPassword?.message}
                                label="Confirm password"
                                registerProps={register("confirmPassword", {
                                    required: "Confirm your password.",
                                    validate: (value) => value === getValues("password") || "Passwords do not match.",
                                })}
                            />
                            <button
                                type="submit"
                                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                            >
                                Reset Password
                            </button>
                        </div>
                    ) : null}

                    {step === "done" ? (
                        <div className="rounded-2xl border bg-secondary p-5 text-secondary-foreground">
                            <CheckCircle2 className="h-9 w-9 text-accent" />
                            <h2 className="mt-4 text-2xl font-bold">Password reset validated.</h2>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                Your reset flow is complete and ready for real OTP API integration.
                            </p>
                            <Link
                                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground"
                                to="/auth/sign-in"
                            >
                                Back to Sign In
                            </Link>
                        </div>
                    ) : null}
                </form>
            </div>
        </section>
    );
}

function StepBadge({ active, completed, label }: { active: boolean; completed: boolean; label: string }) {
    return (
        <span
            className={[
                "rounded-full border px-3 py-2 text-center transition",
                active || completed ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground",
            ].join(" ")}
        >
            {label}
        </span>
    );
}

function PasswordField({
    error,
    label,
    registerProps,
}: {
    error?: string;
    label: string;
    registerProps: UseFormRegisterReturn;
}) {
    return (
        <label className="block text-sm font-semibold">
            {label}
            <span className="mt-2 flex items-center gap-3 rounded-xl border bg-background px-4 focus-within:ring-2 focus-within:ring-ring/50">
                <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                <input
                    type="password"
                    className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    placeholder="Enter password"
                    {...registerProps}
                />
            </span>
            {error ? <span className="mt-2 block text-sm font-normal text-destructive">{error}</span> : null}
        </label>
    );
}
