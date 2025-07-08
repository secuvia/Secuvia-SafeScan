import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";

export default function SecuviaSafeScan() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const fakeScanCheck = (url) => {
    setLoading(true);
    setStatus(null);
    setTimeout(() => {
      // Dummy scan logic for demo
      if (url.includes("scam") || url.includes("fake")) {
        setStatus("danger");
      } else if (url.includes("job") || url.includes("offer")) {
        setStatus("caution");
      } else {
        setStatus("safe");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <Card className="shadow-xl">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold text-center">🔍 Secuvia SafeScan</h2>
          <p className="text-sm text-gray-500 text-center">Enter a website URL to check if it's safe.</p>
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button onClick={() => fakeScanCheck(url)} disabled={loading || !url}>
            {loading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : "Scan Now"}
          </Button>

          {status && (
            <div className="text-center mt-4">
              {status === "safe" && (
                <div className="text-green-600 font-semibold flex items-center justify-center">
                  <ShieldCheck className="mr-2" /> This site looks safe ✅
                </div>
              )}
              {status === "caution" && (
                <div className="text-yellow-600 font-semibold flex items-center justify-center">
                  <ShieldAlert className="mr-2" /> Caution: Suspicious patterns ⚠️
                </div>
              )}
              {status === "danger" && (
                <div className="text-red-600 font-semibold flex items-center justify-center">
                  <ShieldX className="mr-2" /> Danger: Known scam or phishing site 🚨
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
