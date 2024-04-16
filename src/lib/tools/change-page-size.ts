import {deletePaginationSearchParams} from './delete-pagination-search-params';
import {getPageSize} from './get-page-size';
import {PAGINATION_SEARCH_PARAM_NAMES} from './get-pagination-search-params';

export function changePageSize(
  searchParams: URLSearchParams,
  pageSize: number,
) {
  if (pageSize === getPageSize(searchParams)) {
    return searchParams;
  }
  const updatedSearchParams = new URLSearchParams(searchParams);

  deletePaginationSearchParams(updatedSearchParams);

  updatedSearchParams.set(
    PAGINATION_SEARCH_PARAM_NAMES.FIRST,
    pageSize.toString(),
  );
  return updatedSearchParams;
}

if (import.meta.vitest) {
  const {test, expect} = import.meta.vitest;

  test('to be the same search params when page size do not change', () => {
    const searchParams = new URLSearchParams([['first', '10']]);
    const newSearchParams = changePageSize(searchParams, 10);

    expect(newSearchParams).toBe(searchParams);
    expect(Array.from(newSearchParams.entries())).toEqual([['first', '10']]);
  });

  test('to be new search params with deleted pagination values and new page size', () => {
    const searchParams = new URLSearchParams([
      ['first', '10'],
      ['after', '5'],
    ]);
    const newSearchParams = changePageSize(searchParams, 15);

    expect(newSearchParams).not.toBe(searchParams);
    expect(Array.from(newSearchParams.entries())).toEqual([['first', '15']]);
  });

  test('to be new search params with deleted pagination values and new page size as first', () => {
    const searchParams = new URLSearchParams([
      ['last', '10'],
      ['before', '5'],
    ]);
    const newSearchParams = changePageSize(searchParams, 15);

    expect(newSearchParams).not.toBe(searchParams);
    expect(Array.from(newSearchParams.entries())).toEqual([['first', '15']]);
  });
}
