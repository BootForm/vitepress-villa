// CHANGE ME: your real authors. A post's frontmatter references one by key (`author: elena`), and
// the post list/post page look up the display name and bio from here. Renaming a key means
// updating every post that uses it, but changing a name or bio updates every post at once.
export interface Author {
  name: string
  bio: string
}

export const authors: Record<string, Author> = {
  elena: {
    name: 'Elena Papas',
    bio: 'Runs the villa day to day and writes most of the local guides.',
  },
}
