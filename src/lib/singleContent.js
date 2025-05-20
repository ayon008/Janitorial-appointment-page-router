
import { client } from '@/lib/sanity';
const singleContent = async (state) => {
  const query = `*[_type=='State' && slug=='${state}']{
  content
}[0]`;
  const data = await client.fetch(query, { cache: 'no-cache' });
  return data;
};

export default singleContent;