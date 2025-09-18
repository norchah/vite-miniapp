const data = {}

export const mockData = {
  "initData": "query_id=AAFQmfMGAAAAAFCZ8wYNQNEL&user=%7B%22id%22%3A116627792%2C%22first_name%22%3A%22Anton%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22AntonKh%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FsRiV4yFLnUNqzB01KbHMUiJdBzthJP5tNDvCpZy85QU.svg%22%7D&auth_date=1758134596&signature=cvyT2MhPdgQTNUwElevq5odvB2-P1npalaDXBe448lZwJoGfp5_OKwddAZXw1cYIYFzBHRSOSn0Q8lTMAp5QAA&hash=46d5bd49f72810649b0c01b4df05be13df7dce71a93f17fbd61c90f11cdca737",
  "initDataUnsafe": {
    "query_id": "AAFQmfMGAAAAAFCZ8wYNQNEL",
    "user": {
      "id": 116627792,
      "first_name": "Anton",
      "last_name": "",
      "username": "AntonKh",
      "language_code": "ru",
      "is_premium": true,
      "allows_write_to_pm": true,
      "photo_url": "https://t.me/i/userpic/320/sRiV4yFLnUNqzB01KbHMUiJdBzthJP5tNDvCpZy85QU.svg"
    },
    "auth_date": "1758134596",
    "signature": "cvyT2MhPdgQTNUwElevq5odvB2-P1npalaDXBe448lZwJoGfp5_OKwddAZXw1cYIYFzBHRSOSn0Q8lTMAp5QAA",
    "hash": "46d5bd49f72810649b0c01b4df05be13df7dce71a93f17fbd61c90f11cdca737"
  },
  "version": "9.1",
  "platform": "tdesktop",
  "colorScheme": "dark",
  "themeParams": {
    "accent_text_color": "#6ab2f2",
    "bg_color": "#17212b",
    "bottom_bar_bg_color": "#17212b",
    "button_color": "#5288c1",
    "button_text_color": "#ffffff",
    "destructive_text_color": "#ec3942",
    "header_bg_color": "#17212b",
    "hint_color": "#708499",
    "link_color": "#6ab3f3",
    "secondary_bg_color": "#232e3c",
    "section_bg_color": "#17212b",
    "section_header_text_color": "#6ab3f3",
    "section_separator_color": "#111921",
    "subtitle_text_color": "#708499",
    "text_color": "#f5f5f5"
  },
  "isExpanded": true,
  "viewportHeight": 590,
  "viewportStableHeight": 590,
  "safeAreaInset": {
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "contentSafeAreaInset": {
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "isClosingConfirmationEnabled": false,
  "isVerticalSwipesEnabled": true,
  "isFullscreen": false,
  "isOrientationLocked": false,
  "isActive": true,
  "headerColor": "#052f4a",
  "backgroundColor": "#052f4a",
  "bottomBarColor": "#17212b",
  "BackButton": {
    "isVisible": false
  },
  "MainButton": {
    "type": "main",
    "text": "Continue",
    "color": "#5288c1",
    "textColor": "#ffffff",
    "isVisible": false,
    "isProgressVisible": false,
    "isActive": true,
    "hasShineEffect": false
  },
  "SecondaryButton": {
    "type": "secondary",
    "text": "Cancel",
    "color": "#17212b",
    "textColor": "#5288c1",
    "isVisible": false,
    "isProgressVisible": false,
    "isActive": true,
    "hasShineEffect": false,
    "position": "left"
  },
  "SettingsButton": {
    "isVisible": false
  },
  "HapticFeedback": {},
  "CloudStorage": {},
  "DeviceStorage": {},
  "SecureStorage": {},
  "BiometricManager": {
    "isInited": false,
    "isBiometricAvailable": false,
    "biometricType": "unknown",
    "isAccessRequested": false,
    "isAccessGranted": false,
    "isBiometricTokenSaved": false,
    "deviceId": ""
  },
  "Accelerometer": {
    "isStarted": false,
    "x": null,
    "y": null,
    "z": null
  },
  "DeviceOrientation": {
    "isStarted": false,
    "absolute": false,
    "alpha": null,
    "beta": null,
    "gamma": null
  },
  "Gyroscope": {
    "isStarted": false,
    "x": null,
    "y": null,
    "z": null
  },
  "LocationManager": {
    "isInited": false,
    "isLocationAvailable": false,
    "isAccessRequested": false,
    "isAccessGranted": false
  }
}

export const dataItems = [
  {name: 'initData', href: '001', description: 'Подписанные данные от Telegram для проверки на бэке. Менять нельзя!'},
  {name: 'initDataUnsafe', href: '002', description: 'То же самое, но без подписи. Можно использовать для UI, но не для авторизации.'},
  {name: 'version', href: '003', description: 'Версия Bot API, которую поддерживает клиент.'},
  {name: 'platform', href: '004', description: 'Платформа Telegram (tdesktop, android, ios, web).'},
  {name: 'colorScheme', href: '005', description: 'Текущая цветовая схема ("light"/"dark").'},
  {name: 'themeParams', href: '006', description: 'Текущие цвета интерфейса Telegram, можно использовать для UI.'},
  {name: 'isExpanded', href: '007', description: 'На весь экран ли открыто'},
  {name: 'viewportHeight', href: '008', description: 'Высота видимой части приложения.'},
  {name: 'viewportStableHeight', href: '009', description: 'Высота в стабильном состоянии (без анимаций).'},
  {name: 'safeAreaInset', href: '010', description: 'Отступы для безопасной зоны устройства (notch, navbar).'},
  {name: 'contentSafeAreaInset', href: '011', description: 'Отступы для контента без перекрытия UI Telegram.'},
  {name: 'isClosingConfirmationEnabled', href: '012', description: 'Включена ли проверка при закрытии.'},
  {name: 'isVerticalSwipesEnabled', href: '013', description: 'Можно ли закрывать свайпами.'},
  {name: 'isFullscreen', href: '014', description: 'Мини-приложение в полноэкранном режиме.'},
  {name: 'isOrientationLocked', href: '015', description: 'Ориентация заблокирована.'},
  {name: 'isActive', href: '016', description: 'Мини-приложение активно.'},
  {name: 'headerColor', href: '017', description: 'Цвет хедера приложения.'},
  {name: 'backgroundColor', href: '018', description: 'Цвет фона приложения.'},
  {name: 'bottomBarColor', href: '019', description: 'Цвет нижней панели.'},
  {name: 'BackButton', href: '002', description: 'Управление кнопкой "Назад".'},
  {name: 'MainButton', href: '021', description: 'Управление основной кнопкой.'},
  {name: 'SecondaryButton', href: '022', description: 'Управление вторичной кнопкой.'},
  {name: 'SettingsButton', href: '023', description: 'Управление кнопкой настроек.'},
  {name: 'HapticFeedback', href: '024', description: 'Вибро/тактическая отдача.'},
  {name: 'CloudStorage', href: '025', description: 'Работа с облачным хранилищем.'},
  {name: 'DeviceStorage', href: '026', description: 'Работа с локальным хранилищем устройства.'},
  {name: 'SecureStorage', href: '027', description: 'Работа с защищённым локальным хранилищем.'},
  {name: 'BiometricManager', href: '028', description: 'Доступ к биометрии.'},
  {name: 'Accelerometer', href: '029', description: 'Датчик ускорения.'},
  {name: 'DeviceOrientation', href: '030', description: 'Датчик ориентации устройства.'},
  {name: 'Gyroscope', href: '031', description: 'Гироскоп.'},
  {name: 'LocationManager', href: '032', description: ''},
]