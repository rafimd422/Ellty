import { useState } from "react";
import { Box, Divider, DoneButton } from "./styles";
import PageRow from "../PageRow";

export const PageSelector = () => {
  const pages: string[] = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const isAllSelected = selectedPages.length === pages.length;

  const togglePage = (page: string) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const toggleAll = () => {
    setSelectedPages(isAllSelected ? [] : [...pages]);
  };

  return (
    <Box>
      <PageRow label="All pages" checked={isAllSelected} onChange={toggleAll} />

      <Divider />

      {pages.map((page) => (
        <PageRow
          key={page}
          label={page}
          checked={selectedPages.includes(page)}
          onChange={() => togglePage(page)}
        />
      ))}

      <Divider />

      <DoneButton>Done</DoneButton>
    </Box>
  );
}
