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
    score: 15
  },
  {
    id: '2',
    name: 'Вика',
    score: 14
  },
  {
    id: '3',
    name: 'Даша',
    score: 14
  },
  {
    id: '4',
    name: 'Анна',
    score: 13
  },
  {
    id: '5',
    name: 'Алексей',
    score: 12
  },
  {
    id: '6',
    name: 'Екатерина',
    score: 12
  },
  {
    id: '7',
    name: 'Иван',
    score: 11,
    contact: '@avvakumovid',
    avatar: require('../public/ivan.jpg')
  },
  {
    id: '8',
    name: 'Крис',
    score: 9
  },
  {
    id: '9',
    name: 'Степан',
    score: 7
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
    score: 4
  },
  {
    id: '13',
    name: 'Настя',
    score: 4
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
    score: 3
  },
  {
    id: '17',
    name: 'Мартин',
    score: 2
  },
  {
    id: '18',
    name: 'Маша (жена Стаса)',
    score: 2
  },
  {
    id: '19',
    name: 'Мария Хастюк',
    score: 1
  },

]