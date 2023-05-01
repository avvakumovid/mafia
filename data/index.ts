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
    score: 26,
    avatar: require('../public/1.jpg')
  },
  {
    id: '2',
    name: 'Вика',
    score: 27,
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
    score: 21,
    avatar: require('../public/4.jpg')
  },
  {
    id: '5',
    name: 'Алексей',
    score: 15,
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
    score: 23,
    contact: '@avvakumovid',
    avatar: require('../public/ivan.jpg')
  },
  {
    id: '8',
    name: 'Крис',
    score: 9,
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
    score: 6
  },
  {
    id: '13',
    name: 'Настя',
    score: 8,
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
    score: 2
  },
  {
    id: '18',
    name: 'Маша (жена Стаса)',
    score: 2
  },
  {
    id: '19',
    name: 'Мария Хатсюк',
    score: 1,
    avatar: require('../public/19.jpg')
  }, 
  {
    id: '20',
    name: 'Руслан',
    score: 8
  },
  {
    id: '21',
    name: 'Андрей',
    score: 0
  },
  {
    id: '22',
    name: 'Дмитрий',
    score: 2,
    avatar: require('../public/22.jpg')
  },
  {
    id: '23',
    name: 'Аркадий',
    score: 5
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

]