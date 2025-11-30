import '@/styles/globals.css';
import './styles/checkout.css';

import type {AvailableChannel, AvailableLocale} from '@/i18n/consts';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';
import {fontSans} from '@/styles/fonts';

import {Providers} from '../_components/Providers';
import {Toaster} from '../_components/Toaster';
import {Summary} from './_components/summary';

interface Props {
  readonly params: {
    readonly channel: AvailableChannel;
    readonly locale: AvailableLocale;
  };
}

export default function CheckoutLayout({
  children,
  params: {channel, locale},
}: PropsWithChildren<Props>) {
  return (
    <html lang={locale} className={fontSans.className}>
      <body>
        <Providers channel={channel} locale={locale}>
          <div className={cn('flex flex-col md:hidden')}>
            <main className={cn('flex-1 px-4 pb-5 pt-4')}>{children}</main>
            <div className={cn('border-t border-faded-black px-4 pb-5 pt-4')}>
              <Summary />
            </div>
          </div>
          <div className={cn('hidden h-full md:grid md:grid-cols-[56%_44%]')}>
            <main className={cn('flex justify-end pb-5 pl-24 pr-16 pt-14')}>
              <div className={cn('w-[570px]')}>{children}</div>
            </main>
            <aside
              className={cn(
                'flex border-l border-faded-black pb-5 pl-11 pr-24 pt-14',
              )}>
              <div className={cn('w-[420px]')}>
                <Summary />
              </div>
            </aside>
          </div>
        </Providers>
        <Toaster expand />
      </body>
    </html>
  );
}
