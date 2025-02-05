import { Service } from '@/types/service';
import { ServiceCard } from '../services/service-card';

interface StatusGridProps {
  services: Service[];
}

export function StatusGrid({ services }: StatusGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}