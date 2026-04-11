import { Fira_Sans } from 'next/font/google';
import { Great_Vibes } from 'next/font/google';
import { Inter } from 'next/font/google';

export const firaSans = Fira_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: 'swap',
});

export const greatVibes = Great_Vibes({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  display: 'swap',
})

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  display: 'swap',
})
