import Link from 'next/link';
import { TwitterLogo } from '@/components/icons/twitter-logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <TwitterLogo className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">HateCheck</span>
        </Link>
        {/* Navigation items can be added here if needed later */}
      </div>
    </header>
  );
}
