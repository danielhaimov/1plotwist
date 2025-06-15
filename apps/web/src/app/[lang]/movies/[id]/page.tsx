export async function generateStaticParams() {
  try {
    const moviesIds = await getMoviesIds()
    return moviesIds.map(id => ({ id: String(id) }))
  } catch (error) {
    console.error("⚠️ Failed to generate static params:", error)
    return [] // מונע קריסה
  }
}

export const dynamic = 'force-dynamic'; // אם אתה לא חייב SSG
