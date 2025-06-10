import { cn } from './utils';

export const cardStyles = {
  base: 'overflow-hidden border-2 transition-all duration-300 hover:shadow-lg',
  variants: {
    red: 'border-red-100 hover:border-red-200 dark:border-red-800 dark:hover:border-red-700',
    blue: 'border-blue-100 hover:border-blue-200 dark:border-blue-800 dark:hover:border-blue-700',
    green: 'border-green-100 hover:border-green-200 dark:border-green-800 dark:hover:border-green-700',
  },
};

export const headerStyles = {
  base: 'bg-gradient-to-r pb-4',
  variants: {
    red: 'from-red-50 to-white dark:from-red-950 dark:to-gray-900',
    blue: 'from-blue-50 to-white dark:from-blue-950 dark:to-gray-900',
    green: 'from-green-50 to-white dark:from-green-950 dark:to-gray-900',
  },
};

export const titleStyles = {
  base: 'flex items-center gap-2',
  variants: {
    red: 'text-red-600 dark:text-red-400',
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
  },
};

export const contentStyles = {
  base: 'p-6',
  card: 'p-4 rounded-lg border transition-all duration-300',
  variants: {
    red: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800',
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800',
  },
};

export const badgeStyles = {
  variants: {
    red: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    green: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
  },
};

export const getCardClass = (variant: keyof typeof cardStyles.variants) =>
  cn(cardStyles.base, cardStyles.variants[variant]);

export const getHeaderClass = (variant: keyof typeof headerStyles.variants) =>
  cn(headerStyles.base, headerStyles.variants[variant]);

export const getTitleClass = (variant: keyof typeof titleStyles.variants) =>
  cn(titleStyles.base, titleStyles.variants[variant]);

export const getContentClass = (variant: keyof typeof contentStyles.variants) =>
  cn(contentStyles.base, contentStyles.card, contentStyles.variants[variant]);

export const getBadgeClass = (variant: keyof typeof badgeStyles.variants) =>
  cn('px-2 py-1 text-xs font-medium rounded-full', badgeStyles.variants[variant]); 