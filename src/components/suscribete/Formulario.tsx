'use client';
import { useState } from "react";
import Image from 'next/image'
// import Link from 'next/link'
import styles from '@/styles/scss/suscribete.module.scss';

const Formulario = () => {
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email, "Acepta términos:", checked);
    };
    return (
        <div className={styles.suscribeteContainer}>
            <div className={`containerFluid`}>
                <div className={`${styles.gridContainer}`}>
                    <div>
                        <h2 className='misti font-light'>
                            En Gloria estamos
                            comprometidos con <br />
                            <span className='misti font-normal'>el bienestar de tu familia</span>
                        </h2>
                    </div>
                    <div>
                        <p className='misti font-normal'>
                            Suscríbete a nuestro boletín y recibe consejos, recetas y promociones exclusivas para asegurar que tus hijos disfruten de la mejor nutrición en cada etapa de su vida. ¡Porque su bienestar es nuestra prioridad!
                        </p>
                        <form onSubmit={handleSubmit} className="formContainer">
                            <div className="rowLine">
                                <Image className="iconMail" src="/iconmail.svg" width={24} height={24} alt="Suscribete" />
                                <input
                                    type="email"
                                    placeholder="Tu correo aquí"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="buttonBtn">Suscribirme</button>
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
                                    <span className={`checkboxLabel`}>Acepto términos y condiciones leer <a href="/legales/terminos-y-condiciones" target="_blank">aqu&iacute;</a></span>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario
