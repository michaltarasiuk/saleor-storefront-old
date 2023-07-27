import type {ReactNode} from 'react';

type Props = {readonly children: ReactNode};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
