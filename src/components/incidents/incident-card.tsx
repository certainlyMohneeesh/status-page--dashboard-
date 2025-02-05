import { Incident } from '@/types/incident';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface IncidentCardProps {
  incident: Incident;
  onClick?: () => void;
}

export function IncidentCard({ incident, onClick }: IncidentCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{incident.title}</CardTitle>
        <Badge variant={incident.severity === 'critical' ? 'destructive' : 'default'}>
          {incident.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{incident.description}</p>
      </CardContent>
    </Card>
  );
}