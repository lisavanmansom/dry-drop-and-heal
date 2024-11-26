// src/lib/messagesStore.js
import { writable } from 'svelte/store';

// Controleer of we in de browser draaien
const isBrowser = typeof window !== 'undefined';

// Haal de berichten op uit localStorage als we in de browser zijn
export const messages = writable(
  isBrowser ? JSON.parse(localStorage.getItem('messages')) || [] : []
);

// Subscribe naar de store en sla berichten op in localStorage
if (isBrowser) {
  messages.subscribe($messages => {
    localStorage.setItem('messages', JSON.stringify($messages));
  });
}