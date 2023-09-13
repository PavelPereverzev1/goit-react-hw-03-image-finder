import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function errorMsg(msg) {
  Notify.failure(msg, {
    position: 'right',
    clickToClose: true,
    distance: '5px',
    width: '300px',
    fontSize: '16px',
    useIcon: false,
    showOnlyTheLastOne: true,
  });
}
