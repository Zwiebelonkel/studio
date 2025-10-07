'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X, Loader2 } from 'lucide-react';

type ContentFilterProps = {
  onFilter: (query: string) => void;
  isFiltering: boolean;
  onClear: () => void;
  hasSearched: boolean;
};

export default function ContentFilter({ onFilter, isFiltering, onClear, hasSearched }: ContentFilterProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(query);
  };
  
  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Describe a project, e.g., 'a 2D space game'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-10"
          />
          {hasSearched && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button type="submit" disabled={isFiltering}>
          {isFiltering ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Search />
          )}
          <span className="ml-2 hidden sm:inline">Filter</span>
        </Button>
      </form>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Powered by Generative AI
      </p>
    </div>
  );
}
