export type ServiceStatus = 'operational' | 'degraded' | 'partial_outage' | 'major_outage';

export interface Service {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  organizationId: string;
  updatedAt: Date;
}