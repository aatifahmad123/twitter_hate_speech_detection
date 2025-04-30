import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MotivationSection() {
  return (
    <section id="motivation" className="section-card scroll-mt-20">
      <CardHeader>
        <CardTitle className="section-title">1. Motivation</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          People on Twitter are free to tweet anything, which is great as a social media platform encouraging freedom of speech. However, the platform has also been notorious for tweets containing hate speech and offensive language.
        </p>
        <p className="mt-4">
          This project aims to identify tweets with elements of hate and offense so they can be automatically flagged or removed, fostering a more vibrant and respectful social media environment.
        </p>
      </CardContent>
    </section>
  );
}
