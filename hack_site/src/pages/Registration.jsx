import { useState } from "react";
import eyeIcon from '../assets/Glaz.svg'
import styles from './styles/registration.module.css'

export default function Registration() {
    return (
        <>
            <div className={styles.frame}>
                <div className={styles.head}>Регистрация</div>
                <div className={styles.content}>
                    <div className={styles.inBox}>
                        <p className={styles.label}>Логин <span className={styles.star}>*</span></p>
                        <input type="text" name="Логин" id="loginBox" placeholder="Введите логин"/>
                        <p className={styles.addition}>Только латинские буквы</p>
                    </div>
                    <div className={styles.inBox}>
                        <p className={styles.label}>ФИО <span className={styles.star}>*</span></p>
                        <input type="text" name="ФИО" id="fioBox" placeholder="Введите ФИО"/>
                        <p className={styles.addition}>Только русские буквы</p>
                    </div>
                    <Password />
                    <ConfirmPassword />
                </div>
                <div className={styles.foot}>
                    <button className={styles.regBut}>Зарегистрироваться</button>
                    <p className={styles.authText}>Есть аккаунт?<span> </span><a className={styles.regLink} href="./auth">Войти</a></p>
                </div>
            </div>
        </>
    )
}

function Password(){
    const [show, setShow] = useState(false);
    return (
        <div className={styles.inBox}>
            <p className={styles.label}> Пароль <span className={styles.star}>*</span></p>
            <input type={show ? 'text' : 'password'} name="Пароль" id="passwordBox" placeholder="Введите пароль" />
            <img className={styles.glaz} src={eyeIcon} alt="Показать пароль" onClick={() => setShow(!show)} style={{ cursor: 'pointer' }} />
            <p className={styles.addition}>Только латинские буквы, цифры и символы</p>
        </div>
    )
}

function ConfirmPassword(){
    const [show, setShow] = useState(false);
    return (
        <div className={styles.inBox}>
            <p className={styles.label}> Подтверждение пароля <span className={styles.star}>*</span></p>
            <input type={show ? 'text' : 'password'} name="Подтверждение пароля" id="confirmPasswordBox" placeholder="Повторите пароль" />
            <img className={styles.glaz} src={eyeIcon} alt="Показать пароль" onClick={() => setShow(!show)} style={{ cursor: 'pointer' }} />
            <p className={styles.addition}>Только латинские буквы, цифры и символы</p>
        </div>
    )
}