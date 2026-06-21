import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const logActivity = (collectionName: string): CollectionAfterChangeHook => async ({
  doc,
  req,
  operation,
}) => {
  if (collectionName === 'activity-logs') return // Avoid infinite loop

  try {
    await req.payload.create({
      collection: 'activity-logs',
      data: {
        user: req.user ? req.user.id : undefined,
        action: operation === 'create' ? 'Created' : 'Updated',
        collectionName,
        entityId: doc.id,
        details: doc,
      },
    })
  } catch (error) {
    console.error(`Error logging activity for ${collectionName}:`, error)
  }
}

export const logDelete = (collectionName: string): CollectionAfterDeleteHook => async ({
  id,
  req,
}) => {
  try {
    await req.payload.create({
      collection: 'activity-logs',
      data: {
        user: req.user ? req.user.id : undefined,
        action: 'Deleted',
        collectionName,
        entityId: id as string,
      },
    })
  } catch (error) {
    console.error(`Error logging deletion for ${collectionName}:`, error)
  }
}
