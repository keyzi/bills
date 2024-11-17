import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginModal = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Логин:", login);
    console.log("Пароль:", password);
    // Здесь вы можете добавить логику для отправки данных на сервер
  };

  return (
    <>
      {/* Кнопка для открытия модального окна */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Войти
      </button>

      {/* Модальное окно */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: "15px" }}>
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="loginModalLabel">
                Вход в систему
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="login" className="form-label text-dark">
                    Логин
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="login"
                    value={login}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">
                    Пароль
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Войти
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Стили для добавления блёра задней части экрана */}
      <style jsx>{`
        .modal-backdrop.show {
          backdrop-filter: blur(5px);
        }
      `}</style>
    </>
  );
};
