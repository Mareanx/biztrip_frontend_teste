import { fetchCredentials } from "../../pages/Home";
import { PaginationContainer, PageButton, PageNumbersWrapper } from "./styled";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      fetchCredentials(currentPage)
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      fetchCredentials(currentPage)
    }
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <PageButton onClick={handlePrevious} disabled={currentPage === 1}>
        Anterior
      </PageButton>

      <PageNumbersWrapper>
        {getPageNumbers().map((item, index) =>
          typeof item === "number" ? (
            <PageButton
              key={index}
              active={item === currentPage}
              onClick={() => onPageChange(item)}
            >
              {item}
            </PageButton>
          ) : (
            <span key={index} style={{ padding: "0 8px" }}>
              {item}
            </span>
          )
        )}
      </PageNumbersWrapper>

      <PageButton onClick={handleNext} disabled={currentPage === totalPages}>
        Proximo
      </PageButton>
    </PaginationContainer>
  );
};
