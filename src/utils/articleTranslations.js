// Utility function to get translated article content
export const getTranslatedArticle = (t, article) => {
  if (!article) return null

  const articleKey = article.slug.replace(/-/g, '_')
  
  // Try to get translated content
  const translatedTitle = t(`articles.${articleKey}.title`, { defaultValue: article.title })
  const translatedExcerpt = t(`articles.${articleKey}.excerpt`, { defaultValue: article.excerpt })
  const translatedContent = t(`articles.${articleKey}.content`, { defaultValue: article.content })
  const translatedCategory = t(`articles.categories.${article.category}`, { defaultValue: article.category })

  return {
    ...article,
    title: translatedTitle,
    excerpt: translatedExcerpt,
    content: translatedContent,
    category: translatedCategory
  }
}

