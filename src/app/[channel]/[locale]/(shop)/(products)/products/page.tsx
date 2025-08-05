import {Suspense} from 'react';

import {Skeleton} from '@/lib/components/ui/Skeleton';
import {cn} from '@/lib/tools/cn';
import type {SearchParams} from '@/lib/tools/create-search-params';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {Filters} from './_components/filters';
import {ProductList} from './_components/product-list';
import {getQueryVariables} from './_tools/get-query-variables';
import {getQueryVariablesKey} from './_tools/get-query-variables-key';

interface Props {
  readonly searchParams: SearchParams;
}

export default function ProductsPage({searchParams}: Props) {
  return <ProductsPage_ searchParams={searchParams} />;
}

async function ProductsPage_({searchParams: searchParamsObj}: Props) {
  const searchParams = createSearchParams(searchParamsObj);

  const queryVariables = await getQueryVariables(searchParams);
  const key = getQueryVariablesKey(queryVariables);

  return (
    <main>
      <div className={cn('mb-4 mt-2')}>
        <Filters />
      </div>
      <Suspense fallback={<ProductsListSkeleton />}>
        <ProductList key={key} queryVariables={queryVariables} />
      </Suspense>
    </main>
  );
}

function ProductsListSkeleton() {
  return (
    <ol
      className={cn(
        'grid grid-cols-3 gap-x-10 gap-y-6',
        'max-xl:gap-x-8 max-xl:gap-y-4',
        'max-lg:grid-cols-2',
        'max-sm:grid-cols-1',
      )}>
      {Array.from({length: 6}, (_, i) => (
        <li key={i} className={cn('aspect-square')}>
          <Skeleton className={cn('h-full')} />
          <div className={cn('mt-2 flex flex-col gap-1')}>
            <div className={cn('flex items-center justify-between')}>
              <Skeleton className={cn('h-5 w-28')} />
              <Skeleton className={cn('h-5 w-20')} />
            </div>
            <Skeleton className={cn('h-5 w-20')} />
          </div>
        </li>
      ))}
    </ol>
  );
}
