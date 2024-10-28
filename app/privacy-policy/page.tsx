import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PrivacyPolicy /> {/* Main content takes full viewport initially */}
    </div>
  );
};

export default PrivacyPolicy;
