import {KeyIcon, BanknotesIcon} from '@heroicons/react/24/outline';

export const siteConfig = {
  mainDescription: 'Описание приложения, фичи, то се, ссылка "узнать больше" ведущая в инфо',
  bottomNavMenu: [
    {id: 1, name: 'Получить', href: 'payments', icon: BanknotesIcon},
    {id: 2, name: 'Мои ключи', href: 'keys', icon: KeyIcon},
    {id: 3, name: 'Друзья', href: '', icon: KeyIcon},
    {id: 4, name: 'Помощь', href: '', icon: KeyIcon},
  ]
}