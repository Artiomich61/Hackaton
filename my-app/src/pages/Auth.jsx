export default function Auth() {
    return (
        <>
            <div className="frame">
                <div className="head">Авторизация</div>
                <div className="in_box">
                    <label>Логин <span>*</span>
                        <input type="text" name="логин" id="login_box" />
                    </label>
                    <p className="addition">Только латинские буквы</p>
                </div>
                <div className="in_box">
                    <label> Пароль <span>*</span>
                        <input type="text" name="пароль" id="password_box" placeholder="Введите пароль"/>
                    </label>
                    <p className="addition">Только латинские буквы, цифры и символы</p>
                </div>
                <div className="foot">
                    <button className="enter_but">Вход</button>
                    <p className="reg_text">Нет аккаунта? <a href="">Зарегистрироваться</a></p>
                </div>
            </div>
        </>
    )
}