import Image from 'next/image';
import { Camera, Video, ScanSearch } from 'lucide-react';

export function MarineDetectionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            AI-Powered Marine Detection
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Identify ocean animals in real-time. Use your device's camera, upload a video, or analyze recorded footage to detect and classify marine species with our advanced AI models.
          </p>
           <div className="mt-8 space-y-6">
                <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Camera className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Live Camera Detection</h3>
                        <p className="text-foreground/80">Point your camera at marine life and get instant identification and information.</p>
                    </div>
                </div>
                 <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Video className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Video & Recording Analysis</h3>
                        <p className="text-foreground/80">Upload your underwater videos or recordings to get a comprehensive analysis of the species present.</p>
                    </div>
                </div>
                 <div className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ScanSearch className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Data for Research</h3>
                        <p className="text-foreground/80">Contribute valuable data to a global database, aiding researchers in tracking biodiversity and migration.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1565103170138-19a4a35568a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBkZXRlY3Rpb258ZW58MHx8fHwxNzU4OTAxMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Marine life detection underwater"
            width={800}
            height={600}
            className="rounded-lg object-cover"
            data-ai-hint="marine detection"
          />
        </div>
      </div>
    </section>
  );
}
