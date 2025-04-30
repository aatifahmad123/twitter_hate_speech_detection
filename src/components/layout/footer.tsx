import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Project by{' '}
          <span className="font-semibold text-foreground">Aatif Ahmad</span>
        </p>
        <Link
          href="https://github.com/aatifahmad123/twitter_hate_speech_detection"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </div>
    </footer>
  );
}
