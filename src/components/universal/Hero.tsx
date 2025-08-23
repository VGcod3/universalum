import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className={cn("relative w-full h-screen")}>
      {/* Full-screen hero image with a darker overlay for better text visibility */}
      <div className="absolute inset-0">
        <Image
          src="/photo/Hero1.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="z-0"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-radial from-black/50 to-75% to-black/0 z-10"></div>
      </div>

      {/* Centered content */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-6xl flex flex-col items-center gap-6">
          <h1 className="text-headline-1 text-grayscale-white">
            Комплексне проектування та будівництво обʼєктів
          </h1>
          <p className="max-w-3xl text-headline-5 text-grayscale-white">
            Група компаній, що виконують інженерно-геологічні та геодезичні
            вишукування, проектування, будівельно-монтажні роботи — від
            фундаменту до вентильованого фасаду з HPL панелей, влаштування
            світлопрозорих алюмінієвих конструкцій, скляних дахів та фасадів.
          </p>
          <Button className="mt-2">Звʼяжіться з нами</Button>
        </div>
      </div>
    </div>
  );
}
