<script setup lang="ts">
import UserPopUpEl from "./userPopUpEl.vue";
</script>

<template>
  <div class="main">
    <div class="upper">
      <user-pop-up-el header = 'Иван Вишняков' description = 'hui@mail.ru' type="acc">
        <img width="40" height="40" src="//avatars.mds.yandex.net/get-yapic/39727/enc-57f5e77321ece3d2916c9d14b4a831068abbb569b5318b1fe0d892c74bc85b92/islands-retina-middle" alt="">
      </user-pop-up-el>
      <user-pop-up-el header = 'Подключите Плюс' description = 'Фильмы, музыка и кешбэк баллами'>
        <svg style="width:24px; height:24px" fill="#000000" height="24" aria-label="Кешбек:" data-auto="cashback-icon" data-tid="426df28 447ef728" data-tid-prop="447ef728" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 28c7.732 0 14-6.268 14-14 0-.362-.014-.72-.04-1.076l-.006.024h-7.768l-1.771 8.453h-4.347l1.811-8.453H8.111l.845-4.025h7.768L18.48.733A13.983 13.983 0 0 0 14 0C6.268 0 0 6.268 0 14s6.268 14 14 14Zm8.36-25.23a14.041 14.041 0 0 1 4.691 6.153h-5.98l1.29-6.153Z"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Приглашайте друзей' description = 'Подарим вам Плюс и 200 баллов'>
        <svg style="width:24px; height:24px" stroke="#000000" data-tid="441f7b16 1aae478a" data-tid-prop="1aae478a" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5105 7.58417H3.59674V11.975H20.5105V7.58417Z" stroke-width="1.67609" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.0991 11.9642H5.01996V21.1795H19.0991V11.9642Z" stroke-width="1.67609" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.1111 4.78629C18.1111 6.3258 16.7585 7.57259 15.0883 7.57259C14.2532 7.57259 12.0654 7.57259 12.0654 7.57259C12.0654 7.57259 12.0654 5.55605 12.0654 4.78629C12.0654 3.24678 13.4181 2 15.0883 2C16.7585 2 18.1111 3.24678 18.1111 4.78629Z" stroke-width="1.67609" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.00793 4.78629C6.00793 6.3258 7.36057 7.57259 9.03078 7.57259C9.86588 7.57259 12.0536 7.57259 12.0536 7.57259C12.0536 7.57259 12.0536 5.55605 12.0536 4.78629C12.0536 3.24678 10.701 2 9.03078 2C7.36057 2 6.00793 3.24678 6.00793 4.78629Z" stroke-width="1.67609" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0536 7.58417V21.1795" stroke-width="1.67609" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Покупайте как юрлицо' description = 'С возможностью получить вычет до 20% НДС'>
        <svg style="width:24px; height:24px" fill="#222222" data-tid="6a1997ec 74dbb10a" data-tid-prop="74dbb10a" width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 9.98669H14C16.2086 9.98669 17.9991 8.19676 18 5.9884H2C2.00092 8.19676 3.79143 9.98669 6 9.98669H9V8.98669H11V9.98669ZM9 11.9867H6C4.46329 11.9867 3.06151 11.409 2 10.4589V15.9884H18V10.4589C16.9385 11.409 15.5367 11.9867 14 11.9867H11V12.9867H9V11.9867ZM5.48016 3.9884V3C5.48016 1.34315 6.82331 0 8.48016 0H11.5198C13.1767 0 14.5198 1.34315 14.5198 3V3.9884H18.5C19.3284 3.9884 20 4.65998 20 5.4884V16.4884C20 17.3168 19.3284 17.9884 18.5 17.9884H1.5C0.671573 17.9884 0 17.3168 0 16.4884V5.4884C0 4.65998 0.671573 3.9884 1.5 3.9884H5.48016ZM7.48016 3.9884H12.5198V3C12.5198 2.44772 12.0721 2 11.5198 2H8.48016C7.92788 2 7.48016 2.44772 7.48016 3V3.9884Z"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Заказы'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 24 24" data-tid="7409593e"><path d="M1.95 19.486a1.2 1.2 0 0 1-.753-1.114V5.628a1.2 1.2 0 0 1 1.645-1.114l9.564 3.828a1.2 1.2 0 0 1 .755 1.114V22.2a1.2 1.2 0 0 1-1.647 1.114L1.95 19.486Zm8.81.942v-10.16L3.598 7.4v10.16l7.164 2.868Z"></path><path d="m20.325 7.4-7.164 2.868v10.16l7.164-2.869V7.4Zm1.645 12.085-9.564 3.829A1.2 1.2 0 0 1 10.76 22.2V9.456a1.2 1.2 0 0 1 .754-1.114l9.564-3.828a1.2 1.2 0 0 1 1.646 1.114v12.744a1.2 1.2 0 0 1-.754 1.113Z"></path><path d="m5.626 5.628 6.334 2.536 6.335-2.536-6.336-2.536-6.332 2.536h-.001Zm6.78-4.942 9.564 3.828c1.005.402 1.005 1.826 0 2.228l-9.564 3.828a1.2 1.2 0 0 1-.892 0L1.95 6.742C.944 6.34.944 4.916 1.95 4.514L11.514.686a1.2 1.2 0 0 1 .892 0Z"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Возвраты'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-tid="5d148430"><path fill="#222" fill-rule="evenodd" d="M6.776.376a.5.5 0 0 0-.707 0L.944 5.5l5.125 5.124a.5.5 0 0 0 .707 0l.848-.848a.5.5 0 0 0 0-.707l-2.369-2.37H11.5a4.3 4.3 0 0 1 0 8.6H5v2.4h6.5a6.7 6.7 0 0 0 0-13.4H5.256l2.368-2.367a.5.5 0 0 0 0-.708L6.776.376Z" clip-rule="evenodd"></path></svg>    </user-pop-up-el>
      <user-pop-up-el header = 'Промокоды'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" data-tid="7565d4ab"><path fill="#222" d="M22.128 13.822c-.186-.091-3.824-.924-8.393-1.803l-2.28 1.598c4.155 1.011 7.765 1.74 8.17 1.794.05.005.122.016.215.022 1.06.103 2.043-.59 2.288-1.61Z"></path><path fill="#222" d="M9.478 16.1a3.158 3.158 0 0 0-.397-.664.836.836 0 0 1 .226-1.242c.263-.158.587-.365.973-.629l3.873-2.72c3.543-2.517 6.251-4.572 6.376-4.72-.63-.83-1.798-1.053-2.728-.529-.083.044-.144.084-.188.11-.376.234-3.813 2.722-7.507 5.626a26.614 26.614 0 0 0-1.437-.227.826.826 0 0 1-.702-1.042 2.9 2.9 0 0 0 .098-.771c.005-1.708-1.413-3.08-3.148-3.058a3.177 3.177 0 0 0-2.223.942c-.42.418-.706.93-.844 1.482a2.79 2.79 0 0 0-.082.72c-.005 1.708 1.412 3.08 3.148 3.058a3.06 3.06 0 0 0 1.023-.185.844.844 0 0 1 .619.024c.273.12.726.303 1.67.541-.774.607-1.104.958-1.31 1.188a.854.854 0 0 1-.556.279 3.198 3.198 0 0 0-1.008.255c-1.595.7-2.338 2.536-1.657 4.1.1.22.225.431.362.623.347.448.812.796 1.362 1.005a3.178 3.178 0 0 0 2.406-.063c1.589-.703 2.336-2.545 1.65-4.103ZM6.18 10.572a1.82 1.82 0 0 1-1.277.54 1.779 1.779 0 0 1-1.28-.504 1.705 1.705 0 0 1-.529-1.248c-.002-.475.19-.923.533-1.267a1.82 1.82 0 0 1 1.278-.54c.999-.017 1.809.769 1.809 1.751a1.46 1.46 0 0 1-.054.414 1.697 1.697 0 0 1-.48.854Zm1.109 8.422a1.824 1.824 0 0 1-1.383.036 1.738 1.738 0 0 1-1.006-2.296c.182-.447.523-.8.968-.992a1.823 1.823 0 0 1 2.165.54c.087.107.156.23.214.355.392.897-.035 1.951-.958 2.357Z"></path></svg>    </user-pop-up-el>
      <user-pop-up-el header = 'Избранное'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20" data-tid="c5794b68"><path d="M4.584.626A4.534 4.534 0 0 0 .05 5.16c0 3.442 2.548 6.792 7.536 10.09l.414.273.414-.273c4.988-3.298 7.536-6.648 7.536-10.09A4.534 4.534 0 0 0 11.416.626C10.204.626 9.06 1.078 8 1.958 6.94 1.078 5.796.626 4.584.626zM1.55 5.16a3.034 3.034 0 0 1 3.034-3.034c.993 0 1.948.446 2.888 1.378L8 4.027l.528-.523c.94-.932 1.895-1.378 2.888-1.378A3.033 3.033 0 0 1 14.45 5.16c0 2.743-2.117 5.61-6.45 8.561C3.667 10.77 1.55 7.903 1.55 5.16z"></path></svg>    </user-pop-up-el>
      <user-pop-up-el header = 'Списки сравнения'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-tid="7acaec99"><path d="M3 7V4h2v3l3 .001v2H5V12H3V9H0V7h3Zm5 6.004v-2h13v2H8ZM10 7v2h11V7H10ZM3 17.002v-2h18v2H3ZM3 19v2h18v-2H3Z"></path></svg>    </user-pop-up-el>
      <user-pop-up-el header = 'Мои отзывы и вопросы'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-tid="17c73ff3"><path d="M4.4 23h12.2a1.4 1.4 0 0 0 1.4-1.4V19h2.6a1.4 1.4 0 0 0 1.4-1.4V2.4A1.4 1.4 0 0 0 20.6 1H8.4A1.4 1.4 0 0 0 7 2.4V5H4.4A1.4 1.4 0 0 0 3 6.4v15.2A1.4 1.4 0 0 0 4.4 23ZM5 7h11v14H5V7Zm4-4h11v14h-2V6.4A1.4 1.4 0 0 0 16.6 5H9V3Z"></path><path d="M14 9H7v2h7V9Zm0 4H7v2h7v-2Z"></path></svg>    </user-pop-up-el>
      <user-pop-up-el header = 'Продавайте на Маркете' description = 'Дарим 10 000 бонусов на продвижение'>
        <svg style="width: 24px; height: 24px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-tid="2101e250"><path d="M6.01639 9.08366V1H10.1721C12.0083 1 13.4345 1.41005 14.4508 2.23013C15.4836 3.05022 16 4.28871 16 5.94561C16 6.79914 15.8525 7.53565 15.5574 8.15479C15.2787 8.77409 14.8689 9.2845 14.3279 9.68618C13.8033 10.0712 13.1721 10.364 12.4344 10.5648C11.6967 10.749 10.8771 10.841 9.97542 10.841H8.32788V12.9749H13.4672V14.7322H8.32788V19H6.01639V14.7322H4V12.9749H6.01639V10.841H4V9.08366H6.01639ZM8.32788 3.03348V9.08366H9.97542C11.1722 9.08366 12.082 8.83262 12.7049 8.33053C13.3443 7.8118 13.6639 7.01677 13.6639 5.94561C13.6639 4.95817 13.3853 4.23014 12.8279 3.76151C12.2869 3.27616 11.4016 3.03348 10.1721 3.03348H8.32788Z" fill="black"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Помощь рядом' description = 'Социальный проект Яндекса'>
        <svg style="width: 24px; height: 24px" data-tid="bfbdfb33 229d3d62" data-tid-prop="229d3d62" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2793 8.25077C18.7918 6.73819 18.7709 4.30656 17.232 2.76768C15.6931 1.2288 13.2615 1.20784 11.7489 2.72042L10 4.46933L15.5303 9.99967L17.2793 8.25077Z" stroke="black" stroke-width="2"></path><path d="M2.7209 11.7489C1.20833 13.2615 1.22929 15.6931 2.76817 17.232C4.30705 18.7709 6.73868 18.7918 8.25125 17.2793L10.0002 15.5303L4.46982 10L2.7209 11.7489Z" stroke="black" stroke-width="2"></path><path d="M8.25174 2.72042C6.73917 1.20784 4.30754 1.2288 2.76866 2.76768C1.22978 4.30656 1.20882 6.73819 2.72139 8.25077L4.47031 9.99967L10.0007 4.46932L8.25174 2.72042Z" stroke="black" stroke-width="2"></path><path d="M15.5303 10L10 15.5303L11.7489 17.2793C13.2615 18.7918 15.6931 18.7709 17.232 17.232C18.7709 15.6931 18.7918 13.2615 17.2793 11.7489L15.5303 10Z" stroke="black" stroke-width="2"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Справка'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-tid="888f1080"><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 1.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75zm-1.5 13.293c0 .718.479 1.162 1.244 1.162.766 0 1.237-.444 1.237-1.162 0-.725-.471-1.169-1.237-1.169-.765 0-1.244.444-1.244 1.169zm1.456-8.996c-2.099 0-3.288 1.176-3.322 2.878h1.852c.041-.752.561-1.237 1.347-1.237.779 0 1.299.451 1.299 1.086 0 .636-.267.964-1.149 1.491-.943.553-1.319 1.169-1.23 2.262l.014.376h1.811v-.362c0-.656.253-.991 1.162-1.518.964-.567 1.463-1.285 1.463-2.31 0-1.579-1.292-2.666-3.247-2.666z"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Чат с поддержкой'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-tid="102bf167"><path fill-rule="evenodd" d="M7.2 9h2v2h-2V9zm3.6 0h2v2h-2V9zm-.8 8.95a7.956 7.956 0 0 1-2.134-.29l-4.583 1.752v-5.157A7.95 7.95 0 1 1 10 17.95zM4.783 13.8v3.433l3.028-1.158.25.078a6.45 6.45 0 1 0-3.406-2.543l.128.19z" clip-rule="evenodd"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Чита'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-tid="625cb7cb"><path d="M10 18.364C5.817 14.15 3.726 10.666 3.726 7.91a6.274 6.274 0 1 1 12.548 0c0 2.755-2.091 6.24-6.274 10.453zM5.226 7.91c0 2.042 1.565 4.843 4.774 8.29 3.21-3.447 4.774-6.248 4.774-8.29a4.774 4.774 0 0 0-9.548 0zM7 7.91a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Настройки'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 24 24" data-tid="496a460d"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path><path d="m22.215 7.759-1.427-2.483a1.398 1.398 0 0 0-1.755-.591l-2.22.93-1.69-.97-.307-2.422A1.403 1.403 0 0 0 13.426 1h-2.853a1.403 1.403 0 0 0-1.39 1.224L8.88 4.622l-1.72.982-2.191-.92a1.4 1.4 0 0 0-1.756.593L1.787 7.756a1.403 1.403 0 0 0 .364 1.814l1.855 1.41.003 2.038-1.859 1.413a1.402 1.402 0 0 0-.365 1.81l1.427 2.482a1.398 1.398 0 0 0 1.754.592l2.22-.93 1.69.97.308 2.421A1.404 1.404 0 0 0 10.574 23h2.853a1.403 1.403 0 0 0 1.39-1.224l.304-2.398 1.72-.982 2.192.92a1.402 1.402 0 0 0 1.755-.593l1.425-2.479a1.401 1.401 0 0 0-.365-1.814l-1.854-1.41-.002-2.038L21.85 9.57a1.402 1.402 0 0 0 .365-1.81Zm-4.226 2.233.007 4.023 2.222 1.687-.9 1.565-2.613-1.097-3.443 1.966L12.898 21h-1.796l-.367-2.886-3.412-1.956-2.641 1.109-.9-1.565 2.229-1.694-.007-4.02-2.222-1.69.9-1.565L7.294 7.83l3.444-1.966L11.102 3h1.796l.367 2.886 3.412 1.956 2.641-1.109.9 1.565-2.229 1.694Z"></path></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Маркет нанимает'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-tid="a1fad2cd"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5"><path d="m14.593 2.75-2.2 7.332-3.493.168-2.72-7.166 8.413-.334z"></path><path d="M4 9c1.695 0 2.644 1.033 2.847 3.098a1 1 0 0 0 .996.902h5.315a1 1 0 0 0 .995-.902C14.356 10.033 15.305 9 17 9m-6.5 4.5v4.49M7 17.97C7 16.657 7.545 16 8.635 16h3.785c1.063 0 1.595.657 1.595 1.97"></path></g></svg>
      </user-pop-up-el>
      <user-pop-up-el header = 'Выйти'>
        <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 24 24" data-tid="9fd23bbc"><path d="M7 11h8.987v2H7v2.964l-4-4 4-4V11Zm2-6V3h7a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H9v-2h7a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H9Z"></path></svg>
      </user-pop-up-el>
    </div>
    <div class="lower">
      <user-pop-up-el header = 'Добавить пользователя' type="add">
        <div class="plus"></div>
      </user-pop-up-el>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 330px;
  height: 900px;
  position: absolute;
  z-index: 3;
  right: -5px;
  top: -5px;
  display: flex;
  flex-direction: column;
  cursor: default;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: auto;
}
.upper {
  padding: 7px 7px 15px 7px;
  background-color: white;
}

.lower {
  background-color: #f4f4f4;
  padding: 7px;
}

.plus {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
}

.plus:before {
  width: 17px;
  height: 2px;
}

.plus:after {
  width: 2px;
  height: 17px;
}

.plus:after, .plus:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #222;
}

.menu-add:hover .plus{
  background-color: #f4f4f4;
}

.important {
  position: absolute;
  content: "";
  background-color: red;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-left: 6px;
  top: calc(50% - 4px);
}
</style>