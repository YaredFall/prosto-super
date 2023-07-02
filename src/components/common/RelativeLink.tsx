'use client'

import React, { ComponentProps } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = ComponentProps<typeof Link>

export default function RelativeLink({href, ...otherProps}: Props) {
    
    const pathname = usePathname()
    
  return (
    <Link href={pathname + "/" + href} {...otherProps} />
  )
}