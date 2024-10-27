import "server-only";

import { createClient } from "next-sanity";

export const writeClient = createClient({
  projectId: 'ju03o8q0',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skiAd2EZgzohwO7oOLryqTHyKqmcVhzGjSgzOpB2ihW8IyfpnL4a1pZx8vCUSUScC0kBmd2nPgnoCiD765QnEduw1c8Ri1hyVevHt5zy8elzCGKHI9HpUExXUcHlXZR5BMMJQYZP9XgEZRLjRYeEzjXoxhk2Kj69T0s973vGGZmzOYpsQhH9',
});

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}
