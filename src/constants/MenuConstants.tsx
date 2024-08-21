import LogoLight from '@/theme/assets/images/food/foodImage1.jpeg';

// Define the MenuItem type
export interface MenuItem {
  id: string;
  image: number;
  title: string;
  description: string;
  price: string;
  category: string;  // Add the new "category" field
}

// Define the menuItems array
export const menuItems: MenuItem[] = [
  {
    id: '1',
    image: LogoLight,
    title: 'Margherita Pizza',
    description: 'A classic pizza with fresh mozzarella, tomatoes, and basil.',
    price: '$10',
    category: 'Pizza', // Assign the category
  },
  {
    id: '2',
    image: LogoLight,
    title: 'Pepperoni Pizza',
    description: 'A delicious pizza topped with pepperoni slices.',
    price: '$12',
    category: 'Pizza',
  },
  {
    id: '3',
    image: LogoLight,
    title: 'Veggie Pizza',
    description: 'A healthy pizza loaded with fresh vegetables.',
    price: '$11',
    category: 'Pizza',
  },
  {
    id: '4',
    image: LogoLight,
    title: 'Cheeseburger',
    description: 'A juicy beef burger with melted cheese and fresh toppings.',
    price: '$8',
    category: 'Burger', // Assign the category
  },
  {
    id: '5',
    image: LogoLight,
    title: 'Bacon Burger',
    description: 'A burger with crispy bacon and cheddar cheese.',
    price: '$9',
    category: 'Burger',
  },
  {
    id: '6',
    image: LogoLight,
    title: 'Chicken Burger',
    description: 'A grilled chicken burger with lettuce and tomato.',
    price: '$7',
    category: 'Burger',
  },
  {
    id: '7',
    image: LogoLight,
    title: 'Spaghetti Bolognese',
    description: 'Traditional spaghetti served with a rich meat sauce.',
    price: '$12',
    category: 'Pasta', // Assign the category
  },
  {
    id: '8',
    image: LogoLight,
    title: 'Penne Alfredo',
    description: 'Creamy Alfredo sauce with penne pasta.',
    price: '$13',
    category: 'Pasta',
  },
  {
    id: '9',
    image: LogoLight,
    title: 'Lasagna',
    description: 'Layered pasta with meat sauce, ricotta, and mozzarella.',
    price: '$14',
    category: 'Pasta',
  },
  {
    id: '10',
    image: LogoLight,
    title: 'Caesar Salad',
    description: 'Fresh romaine lettuce, Parmesan, and Caesar dressing.',
    price: '$7',
    category: 'Salad', // Assign the category
  },
  {
    id: '11',
    image: LogoLight,
    title: 'Greek Salad',
    description: 'Salad with feta cheese, olives, cucumbers, and tomatoes.',
    price: '$8',
    category: 'Salad',
  },
  {
    id: '12',
    image: LogoLight,
    title: 'Caprese Salad',
    description: 'Tomatoes, fresh mozzarella, and basil with olive oil.',
    price: '$9',
    category: 'Salad',
  },
  {
    id: '13',
    image: LogoLight,
    title: 'Chocolate Sundae',
    description: 'A rich chocolate ice cream sundae with whipped cream.',
    price: '$5',
    category: 'Dessert', // Assign the category
  },
  {
    id: '14',
    image: LogoLight,
    title: 'Apple Pie',
    description: 'Classic apple pie with a scoop of vanilla ice cream.',
    price: '$6',
    category: 'Dessert',
  },
  {
    id: '15',
    image: LogoLight,
    title: 'Cheesecake',
    description: 'Creamy cheesecake with a graham cracker crust.',
    price: '$7',
    category: 'Dessert',
  },
];
