export const appwriteConfig = {
  endpointURL: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT_URL!,
  projectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollection: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
  filesCollection: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,
};
