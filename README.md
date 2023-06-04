# Отборочное задание для соискателей на позицию Junior Frontend developer (React).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Ключевые технологии: React, React-bootstrap, React-router, Axios, Redux, Redux-saga, Git

## Описание задачи

Создан сайт (SPA) с постами с 3 страницами (роуты):

1. Список постов (главная страница) со всеми постами.
2. Страница "Обо мне", где размещена краткая информация об авторе.
3. Подробности о пользователе (информация о пользователе и список его постов).

Данные получены через фейковое api https://jsonplaceholder.typicode.com.

## Подробное описание

1. Список постов (главная страница)

1.1. Содержит список всех постов

1.2. Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев

1.3. Заголовок и текст взяты из api

1.4. Аватар одинаковый для всех пользователей и при клике на него происходит переход на страницу "Подробности о пользователе".

1.5. Список комментариев изначально скрыт, доступна лишь кнопка Комментарии

1.6. При нажатии на кнопку Комментарии, из api грузится и показывается список комментариев к данному посту. При повторном нажатии список скрывается

1.7. Комментарии состоят из заголовка(email) и текста

1.8. При загрузке данных с сервера отображается лоадер, а только потом подгруженный контент (добавлена дополнительная искусственная задержка в 0.5 секунд чтобы лоадер повисел подольше).

1.9. Реализован хэдер с «меню-бургером». При нажатии на него всплывает навигационное меню с 2 ссылками (Список постов и Обо мне), а также отображается аватар пользователя, имя и почтовый адрес.

1.10. Реализован поиск по заголовку поста с возможностью очистки поля по кнопке.

1.11. Реализована сортировка по заголовку поста.

1.12. Реализована пагинация.

2. Обо мне

2.1. Краткая информация об авторе. Эта страница размещена на отдельном роуте. Хэдер и «меню-бургер» сохранены.

3. Подробности о пользователе (переход при нажатии по аватару у поста)

3.1. Краткая информация о пользователе выводится карточкой. Информация соответствует автору поста.

3.2. Отображается список постов, принадлежащих только данному пользователю, структура самих постов полностью идентична с п. 1.2.

3.3. Добавлен лоадер по аналогии с п. 1.8.

3.4. Добавлена кнопка «Назад», при нажатии на которую происходит переход на главную страницу.

## Дополнительно

1. В качестве основы используется шаблон Create React App.

2. Логику работы с сервером вынесена в saga-эффекты.

3. Логически-независимые элементы страниц разбиты на компоненты.

4. На странице Подробности о пользователе данные подгружаются даже после обновления этой страницы.

5. Весь интерфейс реализован с помощью ui-библиотеки React-bootstrap.

6. Во время написания кода коммиты делал почаще (по каждой существенной функции интерфейса).

7. Сделана обработка ошибок на случай прихода ошибки от сервера.

8. Верстка выглядит хорошо для маленьких и больших экранов устройств.

Github Pages: https://segodnya.github.io/mitrasoft-test-react/

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm run build`

### `npm run eject`
