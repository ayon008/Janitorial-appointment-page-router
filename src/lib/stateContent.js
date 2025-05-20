import { client } from '@/lib/sanity';

const getStateContent = async () => {
    const query = `*[_type=='State']{
        slug,
      }`;
    const data = await client.fetch(query, { cache: 'no-cache' });
    return data;
}

export default getStateContent;