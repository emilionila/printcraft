import React, {
  useState,
  ChangeEvent,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';
import './Search.scss';
import searchIcon from '../../icons/search.png';

type Props = {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
};

export const Search: React.FC<Props> = ({
  setSearchQuery,
  searchQuery,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleToggle = () => {
    setIsHidden(prevIsHidden => !prevIsHidden);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current
        && event.target instanceof HTMLElement
        && !inputRef.current.contains(event.target)
        && !inputRef.current.contains(event.target as Node)
        && !event.target.classList.contains('Search--btn')
        && searchQuery.length === 0
      ) {
        setIsHidden(true);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [searchQuery]);

  return (
    <div className="Search">
      <input
        ref={inputRef}
        type="text"
        placeholder="Explore our electronic inventory..."
        onChange={handleSearchInputChange}
        value={searchQuery}
        className={classNames('Search--input', {
          'Search--input-hidden': isHidden,
          'Search--input-on': !isHidden,
        })}
      />
      <button
        onClick={handleToggle}
        className="Search--btn"
        type="button"
      >
        <img
          src={searchIcon}
          alt="search img"
          className="Search--icon"
        />
      </button>
    </div>
  );
};
