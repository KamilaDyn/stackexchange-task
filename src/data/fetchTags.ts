import axios from 'axios';
import { Tags } from '@/hooks/tags/types';
import { Order } from '@/types/tags';
interface Params {
  order: Order;
  page: number;
  tagsNumbers: number;
  sort: 'popular' | 'name' | 'activity';
}

export async function fetchTags(params: Params): Promise<Tags> {
  const { data } = await axios.get(
    `https://api.stackexchange.com/2.3/tags?page=${params.page}&pagesize=${params.tagsNumbers}&?order=${params.order}&sort=${params.sort}&site=stackoverflow&filter=!6WPIomog-aLKv`
  );
  return data;
}
