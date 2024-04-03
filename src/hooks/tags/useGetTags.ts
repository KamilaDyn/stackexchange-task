import { AxiosError } from 'axios';
import {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useState,
  useMemo,
  PointerEvent,
  FocusEvent,
} from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTags } from '@/data/fetchTags';
import { stableSort, getComparator } from '@/utils/sorting';
import { TagsItems, Order, Sort } from '@/types/tags';
import { UseTags, Params, Tags } from './types';
import { useErrorNotification } from '../useErrorNotification';
interface ErrorResponse {
  error_message: string;
}

const initialParams: Params = {
  order: 'asc',
  page: 1,
  tagsNumbers: 5,
  sort: 'popular',
};
export const useGetTags = (): UseTags => {
  const [params, setParams] = useState<Params>(initialParams);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof TagsItems>('name');
  const [pageValue, setPageValue] = useState(5);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { isPending, data, isError, error } = useQuery<Tags, AxiosError>({
    queryKey: ['tags-data', { query: params }],
    queryFn: () => fetchTags(params),
  });

  useErrorNotification({
    isError,
    errorMessage: `Error message: ${(error?.response?.data as ErrorResponse)?.error_message || error?.message}`,
  });
  const handleRequestSort = (
    _: MouseEvent<unknown>,
    property: keyof TagsItems
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleChangePage = (_: ChangeEvent<unknown>, value: number) => {
    if (data?.has_more) {
      setParams((prevValue) => ({ ...prevValue, page: value }));
    }
  };

  const createSortHandler =
    (property: keyof TagsItems) => (event: MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };
  const handleChangeRowsPerPage = (
    _:
      | FocusEvent<HTMLInputElement, Element>
      | PointerEvent<Element>
      | KeyboardEvent<Element>,
    value: number
  ) => {
    setPageValue(value);
  };
  function getTags(
    e: KeyboardEvent<HTMLInputElement | HTMLDivElement | HTMLInputElement>
  ) {
    const tagsNumber = Number((e.target as HTMLInputElement).value);

    if (tagsNumber > 0 && e.key === 'Enter') {
      setPageValue(tagsNumber);
      setParams((prevValue) => ({
        ...prevValue,
        tagsNumbers: tagsNumber,
        page: 1,
      }));
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  const visibleRows = useMemo(() => {
    if (!data?.items) return [];
    const dataItem = data.items;
    return stableSort(dataItem, getComparator(order, orderBy));
  }, [data, order, orderBy, params.page]);

  const handleListItemClick = (
    _: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    sortType: Sort
  ) => {
    setParams((prevValue) => ({ ...prevValue, sort: sortType }));

    handleClose();
  };

  const handlePopoverOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return {
    anchorEl,
    createSortHandler,
    data,
    getTags,
    handleChangePage,
    handleClose,
    handleListItemClick,
    handleChangeRowsPerPage,
    handlePopoverOpen,
    isPending,
    order,
    orderBy,
    pageValue,
    params,
    visibleRows,
  };
};
