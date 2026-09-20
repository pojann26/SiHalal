import React from 'react';
import { Check } from 'lucide-react';

export function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast" role="alert">
      <span className="toast-check">
        <Check size={12} strokeWidth={3} />
      </span>
      <span>{message}</span>
    </div>
  );
}
