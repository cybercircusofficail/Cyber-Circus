"use client";

import Script from "next/script";
import { getOrganizationSchema, getServiceSchema } from "@/lib/seo";

const BusinessSchema = () => {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema();

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
};

export default BusinessSchema;

