// hooks/useEmailSender.ts
import { useState } from 'react';

interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  formType?: 'contact' | 'registration' | 'service' | 'general';
}

interface UseEmailSenderReturn {
  sendEmail: (data: EmailData) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const useEmailSender = (): UseEmailSenderReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error enviando el mensaje');
      }

      setSuccess(true);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
    error,
    success,
  };
};