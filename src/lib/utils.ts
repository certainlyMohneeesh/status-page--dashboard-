import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusColor = (status: string) => {
  const colors = {
    operational: 'bg-green-500',
    degraded: 'bg-yellow-500',
    partial_outage: 'bg-orange-500',
    major_outage: 'bg-red-500',
  };
  return colors[status as keyof typeof colors] || 'bg-gray-500';
};