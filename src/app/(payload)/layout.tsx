import React from 'react'
import config from '@/payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap'
import { serverFunction } from './actions'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
