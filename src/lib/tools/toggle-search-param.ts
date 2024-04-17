import type {ReadonlyURLSearchParams} from 'next/navigation';

export function toggleSearchParam(
  searchParams: URLSearchParams | ReadonlyURLSearchParams,
  name: string,
  value: string,
) {
  const updatedSearchParams = new URLSearchParams(searchParams);

  updatedSearchParams.has(name, value)
    ? updatedSearchParams.delete(name, value)
    : updatedSearchParams.append(name, value);

  return updatedSearchParams;
}

if (import.meta.vitest) {
  const {test, expect} = import.meta.vitest;

  test('to be new search params with selected param', () => {
    const searchParams = new URLSearchParams();
    const newSearchParams = toggleSearchParam(
      searchParams,
      'category',
      'audiobooks',
    );

    expect(newSearchParams).not.toBe(searchParams);
    expect(Array.from(newSearchParams.entries())).toEqual([
      ['category', 'audiobooks'],
    ]);
  });

  test('to be new search params without selected param', () => {
    const searchParams = new URLSearchParams([['category', 'audiobooks']]);
    const newSearchParams = toggleSearchParam(
      searchParams,
      'category',
      'audiobooks',
    );

    expect(newSearchParams).not.toBe(searchParams);
    expect(Array.from(newSearchParams.entries())).toEqual([]);
  });
}
