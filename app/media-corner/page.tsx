import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import ui from "@/components/ui.module.css";
import DocumentLibrary from "./DocumentLibrary";

export const metadata: Metadata = {
  title: "Media corner — PackAhead",
  description:
    "All public documents from the PackAhead project in one place, from deliverables and scientific publications to press releases.",
};

export default function MediaCornerPage() {
  return (
    <main>
      <PageHeader
        title={
          <>
            Media corner.
          </>
        }
        intro="All public documents from the PackAhead project in one place, from deliverables and scientific publications to press releases. Free to read and download."
      />

      <section className={ui.section}>
        <div className="container">
          <DocumentLibrary />
        </div>
      </section>

      <CtaBand
        flushTop
        title="Can't find what you need?"
        text="For press requests, interviews or a document that is not listed yet, get in touch with the project team."
        href="/contact"
        label="CONTACT US"
      />

      <SiteFooter />
    </main>
  );
}
