import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground">
                N
              </div>
              <span className="font-display font-bold text-foreground">NITTEC (PNG)</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Professional engineering and technology solutions across Papua New Guinea since 2014.
            </p>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Phone className="w-3 h-3 text-primary" /> +675 7005 8350 / 7549 4444 / 7802 5964</div>
              <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-primary" /> support@nittecpng.com</div>
              <div className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary" /> www.nittecpng.com</div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-3 text-sm">Office Locations</h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Port Moresby</p>
                  <p>PO Box 1618, Waterfront 125, Konedobu, NCD</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Lae</p>
                  <p>PO Box 2048, Lae 411, Morobe Province</p>
                </div>
              </div>
              <p className="text-muted-foreground/70">Representatives in: Mt. Hagen, Banz, Kundiawa, Wabag, Goroka, Kainantu, Madang, Vanimo, Kokopo, Wewak</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-3 text-sm">Legal & Compliance</h4>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p>IPA Reg: <span className="text-foreground">1-118440</span></p>
              <p>TIN: <span className="text-foreground">501272332</span></p>
              <p>PPL License: <span className="text-foreground">#2308/2023</span></p>
              <p>ISO 9001:2015 Certified</p>
              <p>ISO 45001:2018 Certified</p>
              <p className="pt-1">Insured by Alpha Insurance Limited</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-3 text-sm">Professional Advisors</h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Attorney</p>
                <p>Mr. Edward WAMP — Edward Wamp Lawyers</p>
                <p>edward.wamp@ewl.com.pg</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Accountant</p>
                <p>Mr. Edward UMA — Uma & Co. Limited</p>
                <p>edward.uma@umacopng.com</p>
              </div>
            </div>
            <h4 className="font-display font-bold text-foreground mb-2 mt-4 text-sm">Banking</h4>
            <div className="text-xs text-muted-foreground">
              <p>Bank of South Pacific (BSP) — Port Moresby</p>
              <p>Account: NITTEC — 7008547882</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NITTEC (PNG) LIMITED. All rights reserved. | 100% PNG Owned & Operated
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
