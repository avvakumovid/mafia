import { StaticImageData } from 'next/image';

interface Player {
  id: string;
  name: string;
  score: number;
  avatar?: StaticImageData;
  contact?: string;
}

export const list: Player[] = [
  {
    id: '1',
    name: 'Эдгар',
    score: 33,
    avatar: require('../public/1.jpg')
  },
  {
    id: '2',
    name: 'Вика',
    score: 36,
    avatar: require('../public/2.jpg')
  },
  {
    id: '3',
    name: 'Даша',
    score: 23,

  },
  {
    id: '4',
    name: 'Анна',
    score: 31,
    avatar: require('../public/4.jpg')
  },
  {
    id: '5',
    name: 'Алексей',
    score: 16,
    avatar: require('../public/5.jpg')
  },
  {
    id: '6',
    name: 'Екатерина',
    score: 12,
    avatar: require('../public/6.jpg')
  },
  {
    id: '7',
    name: 'Иван',
    score: 36,
    contact: '@avvakumovid',
    avatar: require('../public/ivan.jpg')
  },
  {
    id: '8',
    name: 'Крис',
    score: 15,
    avatar: require('../public/8.jpg')
  },
  {
    id: '9',
    name: 'Степан',
    score: 10,
    avatar: require('../public/9.jpg')
  },
  {
    id: '10',
    name: 'Никита',
    score: 5
  },
  {
    id: '11',
    name: 'Станислав Потапов',
    score: 5
  },
  {
    id: '12',
    name: 'Женя',
    score: 7
  },
  {
    id: '13',
    name: 'Настя',
    score: 10,
    avatar: require('../public/13.jpg')
  },
  {
    id: '14',
    name: 'Рома',
    score: 4
  },
  {
    id: '15',
    name: 'Стас (муж Маши)',
    score: 4
  },
  {
    id: '16',
    name: 'Илья',
    score: 9,
    avatar: require('../public/16.jpg')
  },
  {
    id: '17',
    name: 'Мартин',
    score: 2,
    avatar: require('../public/17.jpg')
  },
  {
    id: '18',
    name: 'Маша (жена Стаса)',
    score: 2
  },
  {
    id: '19',
    name: 'Мария Гацук',
    score: 8,
    avatar: require('../public/19.jpg')
  },
  {
    id: '20',
    name: 'Руслан',
    score: 13
  },
  {
    id: '21',
    name: 'Андрей',
    score: 0
  },
  {
    id: '22',
    name: 'Дмитрий',
    score: 4,
    avatar: require('../public/22.jpg')
  },
  {
    id: '23',
    name: 'Аркадий',
    score: 9
  },
  {
    id: '24',
    name: 'Сергей',
    score: 6
  },
  {
    id: '25',
    name: 'Юля',
    score: 6,
    avatar: require('../public/25.jpg')
  },
  {
    id: '26',
    name: 'Маша',
    score: 9,
    avatar: require('../public/26.jpg')
  },
  {
    id: '27',
    name: 'Кристина',
    score: 7,
    avatar: require('../public/27.jpg')
  },
  {
    id: '28',
    name: 'Татьяна',
    score: 6,
  },
  {
    id: '29',
    name: 'Алексей Кочергин',
    score: 5,
    avatar: require('../public/29.jpg')
  },
  {
    id: '30',
    name: 'Сергей (муж Кати)',
    score: 4,
  },
  {
    id: '31',
    name: 'Катя (жена Сергея)',
    score: 3,
  },
  {
    id: '32',
    name: 'Марина',
    score: 3,
  },
  {
    id: '33',
    name: 'Татьяна стилист',
    score: 2,
  },
  {
    id: '34',
    name: 'Ольга',
    score: 2,
  },

]