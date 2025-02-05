import { redirect } from 'next/navigation';
import { auth } from "@clerk/nextjs/server";
import { StatusGrid } from '@/components/status/status-grid';
import { prisma } from '@/lib/db';

export default async function HomePage() {
  const { userId } =  await auth();
  if (userId) redirect('/dashboard');

  const services = await prisma.service.findMany({
    where: {
      organization: {
        subdomain: process.env.DEFAULT_SUBDOMAIN
      }
    },
    include: {
      incidents: {
        where: {
          status: {
            not: 'resolved'
          }
        }
      }
    }
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">System Status</h1>
          <p className="mt-2 text-muted-foreground">
            Current status of our services and systems
          </p>
        </div>
        <StatusGrid services={services} />
      </div>
    </main>
  );
}