import iconFree from '@/assets/img/Icon/membership-free.png'
import iconIndividual from '@/assets/img/Icon/membership-individual.png'
import iconCorporate from '@/assets/img/Icon/membership-corporate.png'

export const pricingPlans = [
  {
    title: 'Free',
    price: 'FREE',
    time: '/ FOREVER',
    buttonText: 'Try for free',
    buttonType: 'secondary',
    benefits: [
      { icon: iconFree, text: 'Components-driven system' },
      { icon: iconFree, text: 'Sales-boosting landing pages' },
      { icon: iconFree, text: 'Awesome Feather icons pack' },
    ],
  },
  {
    title: '👤 Individual',
    badge: 'BEST!',
    price: '$24',
    time: '/ MONTH',
    buttonText: 'Try for free',
    buttonType: 'primary',
    highlight: true,
    benefits: [
      { icon: iconIndividual, text: 'Components-driven system' },
      { icon: iconIndividual, text: 'Sales-boosting landing pages' },
      { icon: iconIndividual, text: 'Awesome Feather icons pack' },
      { icon: iconIndividual, text: 'Themed into 3 different styles' },
      { icon: iconIndividual, text: 'Will help to learn Figma' },
    ],
  },
  {
    title: '👥 Corporate',
    price: '$12',
    time: '/ EDITOR',
    buttonText: 'Extended license',
    benefits: [
      { icon: iconCorporate, text: 'Components-driven system' },
      { icon: iconCorporate, text: 'Sales-boosting landing pages' },
      { icon: iconCorporate, text: 'Awesome Feather icons pack' },
      { icon: iconCorporate, text: 'Themed into 3 different styles' },
    ],
  },
]
