"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { tractionSupportEmail } from "@/lib/traction";

type Tab = "issue" | "feedback";
type IssueType = "Bug" | "Feature Request" | "Billing" | "Other";
const ISSUE_TYPES: IssueType[] = ["Bug", "Feature Request", "Billing", "Other"];

export default function TractionSupportPage() {
  const [tab, setTab] = useState<Tab>("issue");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState<IssueType | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [body, setBody] = useState("");

  const sendEnabled =
    email.trim().length > 0 &&
    body.trim().length > 0 &&
    (tab === "feedback" || issueType !== null);

  const handleSend = () => {
    if (!sendEnabled) return;
    const subject =
      tab === "issue" ? `Traction Support: ${issueType}` : "Traction Feedback";
    const fullBody = `Reply to: ${email}\n\n${body}`;
    const url = `mailto:${tractionSupportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(fullBody)}`;
    window.location.href = url;
  };

  return (
    <section className="px-6 pt-16 pb-24 md:pt-20">
      <div className="mx-auto max-w-md">
        <h1 className="mb-6 text-center text-xl font-semibold tracking-tight text-foreground">
          Contact Support
        </h1>

        {/* Tab toggle */}
        <div className="mb-3 flex gap-1 rounded-xl bg-muted p-1">
          {(["issue", "feedback"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setDropdownOpen(false);
              }}
              className={`flex-1 rounded-lg px-2 py-2.5 text-sm font-medium transition-all ${
                tab === t
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              {t === "issue" ? "Report an issue" : "Share Feedback"}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
          />

          {tab === "issue" && (
            <div className="overflow-hidden rounded-xl border border-border bg-white">
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className={`flex w-full items-center justify-between px-4 py-3.5 text-[15px] ${
                  issueType ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <span>{issueType ?? "Request type"}</span>
                {dropdownOpen ? (
                  <ChevronUp size={15} className="text-muted-foreground" />
                ) : (
                  <ChevronDown size={15} className="text-muted-foreground" />
                )}
              </button>

              {dropdownOpen &&
                ISSUE_TYPES.map((type) => (
                  <div key={type}>
                    <div className="mx-4 h-px bg-border" />
                    <button
                      onClick={() => {
                        setIssueType(type);
                        setDropdownOpen(false);
                      }}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-[15px] text-foreground"
                    >
                      <span>{type}</span>
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          issueType === type ? "bg-foreground" : "bg-muted"
                        }`}
                      >
                        {issueType === type && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>
                    </button>
                  </div>
                ))}
            </div>
          )}

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            placeholder={
              tab === "issue" ? "Describe your issue..." : "Share your thoughts..."
            }
            className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3.5 text-[15px] leading-relaxed text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={!sendEnabled}
          className={`mt-4 w-full rounded-xl px-6 py-3.5 text-[15px] font-semibold transition-opacity ${
            sendEnabled
              ? "cursor-pointer bg-foreground text-white"
              : "cursor-default bg-muted text-muted-foreground"
          }`}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
