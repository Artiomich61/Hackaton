import "./styles/main.css"
import styles from './styles/auth.module.css'
import { useState } from 'react'
import eyeIcon from '../assets/Glaz.svg'

export default function Auth() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={styles.frame}>
                <div className={styles.head}>Авторизация</div>
                <div className={styles.content}>
                    <div className={styles.inBox}>
                        <p className={styles.label}>Логин <span className={styles.star}>*</span></p>
                        <input type="text" name="Логин" id="loginBox" placeholder="Введите логин"/>
                        <p className={styles.addition}>Только латинские буквы</p>
                    </div>
                    <div className={styles.inBox}>
                        <p className={styles.label}> Пароль <span className={styles.star}>*</span></p>
                        <input type={show ? 'text' : 'password'} name="Пароль" id="passwordBox" placeholder="Введите пароль" />
                        <img className={styles.glaz} src={eyeIcon} alt="Показать пароль" onClick={() => setShow(!show)} style={{ cursor: 'pointer' }} />
                        <p className={styles.addition}>Только латинские буквы, цифры и символы</p>
                    </div>
                </div>
                <div className={styles.foot}>
                    <button className={styles.enterBut}>Вход</button>
                    <p className={styles.regText}>Нет аккаунта?<span> </span><a className={styles.regLink} href="./registration">Зарегистрироваться</a></p>
                </div>
            </div>
        </>
    )
}