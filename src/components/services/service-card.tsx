import { Service } from '@/types/service';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { getStatusColor } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{service.name}</CardTitle>
        <div className={`h-2 w-2 rounded-full ${getStatusColor(service.status)}`} />
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}