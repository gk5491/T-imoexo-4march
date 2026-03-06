import { useEffect, useState } from "react";
import type { Company } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ArrowUpRight, Building2, CalendarDays, Factory, Package, X } from "lucide-react";
import { Link } from "react-router-dom";

interface CompanySectionProps {
  company: Company;
  index: number;
}

const withAlpha = (color: string, alpha: number) => {
  if (color.startsWith("hsl(") && color.endsWith(")")) {
    return color.replace(")", ` / ${alpha})`);
  }
  return color;
};

interface ImagePreviewState {
  src: string;
  alt: string;
}

const CompanySection = ({ company, index }: CompanySectionProps) => {
  const productsCount = company.products.length;
  const accentSoft = withAlpha(company.color, 0.14);
  const accentRing = withAlpha(company.color, 0.42);
  const [imagePreview, setImagePreview] = useState<ImagePreviewState | null>(null);

  useEffect(() => {
    if (!imagePreview) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImagePreview(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [imagePreview]);

  return (
    <section className="relative">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_85px_-45px_rgba(15,23,42,0.5)]">
        <div
          className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full blur-3xl"
          style={{ backgroundColor: accentSoft }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: accentSoft }}
        />

        <div className="grid lg:grid-cols-12">
          <aside className="relative border-b border-slate-200/80 p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              <Building2 className="h-3.5 w-3.5" />
              Partner {String(index + 1).padStart(2, "0")}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border-2 bg-white"
                style={{ borderColor: accentRing }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-full object-cover"
                />
              </div>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ backgroundColor: accentSoft, color: company.color }}
              >
                {company.sector}
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              {company.name}
            </h2>
            <p className="mt-2 line-clamp-1 text-sm leading-relaxed text-slate-600 sm:text-base">{company.tagline}</p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              <CalendarDays className="h-3.5 w-3.5" />
              Started: {company.started}
            </p>
            <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-600">{company.overview}</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Catalog</p>
                <p className="mt-1 font-display text-2xl font-black text-slate-900">{productsCount}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Type</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                  <Factory className="h-4 w-4" />
                  Verified
                </p>
              </div>
            </div>

            <Link
              to={`/contact`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
            >
              Connect With Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>

          <div className="relative p-5 sm:p-7 lg:col-span-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                <Package className="h-4 w-4" />
                Product Collection
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {productsCount} listings
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {company.products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  companyName={company.name}
                  companyColor={company.color}
                  delay={i * 0.04}
                  onImageClick={(src, alt) => setImagePreview({ src, alt })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {imagePreview && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/85 p-4 sm:p-8"
          onClick={() => setImagePreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label={imagePreview.alt}
        >
          <button
            type="button"
            onClick={() => setImagePreview(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={imagePreview.src}
            alt={imagePreview.alt}
            className="max-h-[88vh] max-w-[95vw] rounded-2xl object-contain shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CompanySection;
