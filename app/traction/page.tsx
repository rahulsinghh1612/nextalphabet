import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export default function TractionIndexPage() {
  return (
    <LegalPage title="Traction" updated="12 July 2026">
      <p>Habit and goal tracking, kept entirely on your device.</p>
      <ul>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms">Terms of Use</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </LegalPage>
  );
}
