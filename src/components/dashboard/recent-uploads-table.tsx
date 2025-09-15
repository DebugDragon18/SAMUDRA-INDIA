import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { recentUploadsData } from '@/lib/data';
import { FileText, Fish, TestTube } from 'lucide-react';

const typeIcons: { [key: string]: React.ReactNode } = {
  Oceanographic: <TestTube className="h-4 w-4 text-blue-500" />,
  Fisheries: <Fish className="h-4 w-4 text-green-500" />,
  Biodiversity: <FileText className="h-4 w-4 text-purple-500" />,
};

const typeVariants: { [key: string]: "default" | "secondary" | "outline" } = {
  Oceanographic: 'default',
  Fisheries: 'secondary',
  Biodiversity: 'outline',
};

export function RecentUploadsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Dataset Uploads</CardTitle>
        <CardDescription>An overview of the latest contributed datasets.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Dataset Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Uploaded by</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentUploadsData.map((upload) => (
              <TableRow key={upload.name}>
                <TableCell className="font-medium">{upload.name}</TableCell>
                <TableCell>
                  <Badge variant={typeVariants[upload.type] || 'default'} className="flex items-center gap-1.5 w-fit">
                    {typeIcons[upload.type]}
                    {upload.type}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{upload.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="hidden sm:inline font-medium">{upload.user.name}</span>
                    <Avatar className="h-8 w-8">
                       <AvatarImage src={`https://picsum.photos/seed/${upload.user.id}/40/40`} alt={upload.user.name} data-ai-hint="person portrait" />
                      <AvatarFallback>{upload.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
