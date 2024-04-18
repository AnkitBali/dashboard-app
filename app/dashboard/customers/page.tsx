import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};
export default function Page() {
  return <CustomersTable customers={[]} />;
}
