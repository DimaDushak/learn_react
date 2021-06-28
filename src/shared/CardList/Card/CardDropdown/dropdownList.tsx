import assignId from '../../../../utils/js/assoc';

const dropdownList = [
    { text: 'Комментарии', icon: 'message' as const },
    { text: 'Поделиться', icon: 'share' as const },
    { text: 'Cкрыть', icon: 'hide' as const },
    { text: 'Сохранить', icon: 'save' as const },
    { text: 'Пожаловаться', icon: 'warning' as const },
].map(assignId);

export default dropdownList;
