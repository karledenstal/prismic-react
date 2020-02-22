import Prismic from 'prismic-javascript';
import Link from 'next/link';
import { apiEndpoint, accessToken, linkResolver, hrefResolver } from '../prismic-configuration';

export const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
