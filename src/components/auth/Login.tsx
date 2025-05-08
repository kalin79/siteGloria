"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { z } from 'zod';
import { signInSchema } from '@/lib/validators';
import styles from '@/styles/scss/login.module.scss';

import Link from 'next/link'

// import styles from '@/styles/sass/login.module.sass'

// type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;



const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {

            const data = {
                email,
                password,
                terms: checked
            }

            // Validar con Zod en el cliente.

            const parsedData = signInSchema.safeParse(data);
            console.log(parsedData)
            if (!parsedData.success) {
                setError(parsedData.error.errors[0].message);
                setIsLoading(false);
                return;
            }
            // Llamar a signIn de NextAuth
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            // console.log(result);

            if (result?.error) {
                setError(result.error);
                setIsLoading(false);
            } else {
                router.push("/");
            }
        } catch (err) {
            setError(` ${err} Error inesperado. Intenta de nuevo.`);
            setIsLoading(false);
        }
    };

    return (
        <div className="formContainer">
            <div className="">
                <h2 className="mitsi font-medium">Usuarios registrados:</h2>
                <form onSubmit={handleSubmit} className="">
                    <div>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=""
                            placeholder="Ingresa tu correo electrónico"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=""
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    {error &&
                        (
                            <div className="alert alert-danger">
                                <p>{error}</p>
                            </div>
                        )
                    }

                    <div className={styles.forgotContainer}>
                        <Link href="/auth/forgot" className="poppins">¿Olvidaste tu contraseña?</Link>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`buttonBtn ${styles.buttonBtnForm}`}
                        >
                            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                        </button>
                    </div>

                    <div>
                        <label className="customCheckbox">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <span className="checkboxBox">
                                {checked && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                        <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </span>
                            <span className={`checkboxLabel ${styles.checkboxLabel}`}>He leído y acepto los <a href="/legales/terminos-y-condiciones" target="_blank">Términos y Condiciones,</a> Politicas de protección de datos personales</span>
                        </label>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
