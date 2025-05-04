import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContactStore } from "@/store/contactStore";

export function SearchAndFilter() {
  const {
    setSearchQuery,
    setTagFilter,
    removeTagFilter,
    clearFilters,
    filters,
    availableTags,
  } = useContactStore();
  const [searchInput, setSearchInput] = useState(filters.search);

  // Sync search input with store
  useEffect(() => {
    setSearchInput(filters.search);
  }, [filters.search]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, setSearchQuery]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          className="pl-10"
          placeholder="Search contacts..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          aria-label="Search contacts"
        />
        {searchInput && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={() => setSearchInput("")}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Filter by Tags</p>
        <div className="flex flex-wrap gap-1">
          {availableTags.map((tag) => {
            const isSelected = filters.tags.includes(tag);
            const tagColors = ["red", "blue", "green", "yellow", "purple"];
            const colorIndex = tag
              .split("")
              .reduce((acc, char) => acc + char.charCodeAt(0), 0) % tagColors.length;
            const colorClass = isSelected ? `tag-${tagColors[colorIndex]}` : "";
            
            return (
              <button
                key={tag}
                onClick={() => isSelected ? removeTagFilter(tag) : setTagFilter(tag)}
                className={`tag cursor-pointer ${
                  isSelected
                    ? colorClass
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                aria-pressed={isSelected}
              >
                {tag}
                {isSelected && (
                  <span className="ml-1" aria-hidden="true">
                    ×
                  </span>
                )}
              </button>
            );
          })}
          
          {filters.tags.length > 0 && (
            <button
              onClick={clearFilters}
              className="tag bg-secondary text-secondary-foreground hover:bg-secondary/80"
              aria-label="Clear all filters"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}