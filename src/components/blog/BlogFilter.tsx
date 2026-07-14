import { useState, useMemo } from 'preact/hooks';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  tags: string[];
}

interface Props {
  posts: Post[];
}

const PER_PAGE = 12;

function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function slugifyCategory(cat: string): string {
  return cat.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function BlogFilter({ posts }: Props) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((p) => {
      p.categories.forEach((c) => counts.set(c, (counts.get(c) || 0) + 1));
    });
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === 'all' || post.categories.includes(activeCategory);
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [posts, query, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const page = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function goToPage(p: number) {
    setCurrentPage(p);
    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleCategoryClick(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handleSearch(e: Event) {
    setQuery((e.target as HTMLInputElement).value);
    setCurrentPage(1);
  }

  // Build page numbers
  const pageNumbers: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (totalPages <= 7 || i === 1 || i === totalPages || Math.abs(i - page) <= 1) {
      pageNumbers.push(i);
    } else if (pageNumbers[pageNumbers.length - 1] !== '...') {
      pageNumbers.push('...');
    }
  }

  return (
    <div>
      {/* Search */}
      <div class="bf-controls">
        <div class="bf-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search articles, topics, tags..."
            value={query}
            onInput={handleSearch}
            autocomplete="off"
          />
        </div>

        {/* Category pills */}
        <div class="bf-filters" role="group" aria-label="Filter by category">
          <button
            class={`bf-pill${activeCategory === 'all' ? ' active' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            All ({posts.length})
          </button>
          {categories.map(([cat, count]) => (
            <button
              key={cat}
              class={`bf-pill${activeCategory === cat ? ' active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <>
          <div class="bf-grid" id="blog-grid">
            {paginated.map((post) => (
              <article class="bf-card" key={post.slug}>
                <div class="bf-card__cats">
                  {post.categories.map((cat) => (
                    <a
                      key={cat}
                      href={`/blog/category/${slugifyCategory(cat)}`}
                      class="bf-card__cat"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
                <h3 class="bf-card__title">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
                <p class="bf-card__excerpt">{post.excerpt}</p>
                <time class="bf-card__date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav class="bf-pagination" aria-label="Blog pagination">
              <button
                class="bf-page-btn"
                disabled={page === 1}
                onClick={() => goToPage(page - 1)}
              >
                &laquo; Prev
              </button>
              {pageNumbers.map((n, i) =>
                n === '...' ? (
                  <span key={`dots-${i}`} class="bf-dots">&hellip;</span>
                ) : (
                  <button
                    key={n}
                    class={`bf-page-btn${n === page ? ' active' : ''}`}
                    onClick={() => goToPage(n)}
                  >
                    {n}
                  </button>
                )
              )}
              <button
                class="bf-page-btn"
                disabled={page === totalPages}
                onClick={() => goToPage(page + 1)}
              >
                Next &raquo;
              </button>
            </nav>
          )}

          <p class="bf-count" aria-live="polite">
            {query || activeCategory !== 'all'
              ? `Showing ${filtered.length} of ${posts.length} articles`
              : `Page ${page} of ${totalPages} \u00B7 ${posts.length} articles`}
          </p>
        </>
      ) : (
        <div class="bf-empty">
          <p>No articles found. Try a different search term or clear the filter.</p>
          <button class="bf-pill" onClick={() => { setQuery(''); setActiveCategory('all'); }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
