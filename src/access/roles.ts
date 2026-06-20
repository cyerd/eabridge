import { Access, FieldAccess } from 'payload'

export const superAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'super-admin'
}

export const admin: Access = ({ req: { user } }) => {
  return user?.role === 'super-admin' || user?.role === 'admin'
}

export const editor: Access = ({ req: { user } }) => {
  return user?.role === 'super-admin' || user?.role === 'admin' || user?.role === 'editor'
}

export const contentManager: Access = ({ req: { user } }) => {
  return user?.role === 'super-admin' || user?.role === 'admin' || user?.role === 'content-manager'
}

export const anyone: Access = () => true

export const superAdminFieldAccess: FieldAccess = ({ req: { user } }) => {
  return user?.role === 'super-admin'
}

export const adminFieldAccess: FieldAccess = ({ req: { user } }) => {
  return user?.role === 'super-admin' || user?.role === 'admin'
}
