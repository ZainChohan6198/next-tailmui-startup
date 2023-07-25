'use client'
import { company } from '@constants/company/Details';
import { JsonLdReview } from '@constants/strucureData/ReviewsJsonLd';
import { DefaultSeo, NextSeo, OrganizationJsonLd } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../next-seo.config';

export default function Home() {
  return (
    <div>
      <NextSeo canonical={`${company.url}`} />
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
      <JsonLdReview />
      <OrganizationJsonLd />
    </div>
  )
}
