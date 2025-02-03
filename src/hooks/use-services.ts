import { useState, useEffect } from 'react';
import { Service } from '@/types/service';
import { api } from '@/lib/api';

export function useServices(organizationId: string) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchServices();
  }, [organizationId]);

  const fetchServices = async () => {
    try {
      const data = await api.get<Service[]>(`/organizations/${organizationId}/services`);
      setServices(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateService = async (serviceId: string, updates: Partial<Service>) => {
    try {
      const updated = await api.put<Service>(`/services/${serviceId}`, updates);
      setServices(services.map(s => s.id === serviceId ? updated : s));
      return updated;
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  return { services, loading, error, updateService, refetch: fetchServices };
}