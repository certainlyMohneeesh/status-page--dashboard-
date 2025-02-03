export interface TeamMember {
    id: string;
    userId: string;
    organizationId: string;
    role: 'admin' | 'member';
    email: string;
    name: string;
  }