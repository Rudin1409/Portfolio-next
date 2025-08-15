
'use client';
import dynamic from 'next/dynamic';

const LanyardImpl = dynamic(() => import('./LanyardImpl'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Lanyard(props) {
  return <LanyardImpl {...props} />;
}
