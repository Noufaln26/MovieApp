import { useMemo } from 'react';
import Fuse from 'fuse.js';

const defaultOptions = {
    keys: ["name"],
    threshold: 0.2,
    includeMatches: true,
};

const useFuzzySearch = (data, options = defaultOptions) => {
  const fuse = useMemo(() => new Fuse(data, options), [data, options]);

  return (query) => {
    if (!query.trim()) return data;

    const results = fuse.search(query);
    return results.map(result => ({
      name: result.item.name,
      "poster-image": result.item["poster-image"],
    }));
  };
};

export default useFuzzySearch;
