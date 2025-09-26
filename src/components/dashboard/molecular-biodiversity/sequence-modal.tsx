"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sequence } from "@/lib/molecular-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  sequences: Sequence[];
  locationName: string;
}

const GENBANK_URL = "https://www.ncbi.nlm.nih.gov/nuccore/";

export function SequenceModal({ isOpen, onClose, sequences, locationName }: SequenceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Sequence Data for {locationName}</DialogTitle>
          <DialogDescription>
            List of DNA/rDNA sequences identified at this sampling site.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Taxa Name</TableHead>
                <TableHead>Sequence ID</TableHead>
                <TableHead>Abundance</TableHead>
                <TableHead>Database Link</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sequences.filter(s => s.sequence_id !== 'N/A').map((seq) => (
                <TableRow key={seq.id}>
                    <TableCell className="font-medium">{seq.taxa_name}</TableCell>
                    <TableCell>{seq.sequence_id}</TableCell>
                    <TableCell>{seq.abundance}%</TableCell>
                    <TableCell>
                    <Button variant="link" asChild className="p-0 h-auto">
                        <Link href={`${GENBANK_URL}${seq.sequence_id}`} target="_blank" rel="noopener noreferrer">
                            View in GenBank
                        </Link>
                    </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
