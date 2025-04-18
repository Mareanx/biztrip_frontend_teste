import { styled } from "../../styles/stitches.config";

export const Wrapper = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "1rem",
  backgroundColor: "$neutral-100",
  marginTop: "60px",

  "@media (max-width: 768px)": {
    padding: "0.5rem",
    alignItems: "flex-start",
    height: "auto",
    marginBottom: "0",
    marginTop: "100px",
  },
});

export const Table = styled("table", {
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  borderCollapse: "collapse",
  backgroundColor: "$white",
  borderRadius: "8px",

  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

export const TableBody = styled("tbody", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "@media (max-width: 768px)": {
    gap: "0.5rem",
    marginBottom: "0",
  },
});

export const TableRow = styled("tr", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  backgroundColor: "$primaryForeground",
  border: "2px solid",
  borderRadius: "8px",
  transition: "border 0.3s ease, box-shadow 0.3s ease",
  padding: "1rem",
  gap: "1rem",

  variants: {
    active: {
      true: {
        border: "2px solid $primary",
      },
      false: {
        border: "1px solid $neutral-200",
      },
    },
  },

  "@media (max-width: 768px)": {
    flexDirection: "column",
    padding: "0.5rem",
    gap: "0.5rem",
    alignItems: "stretch",
  },
});

export const TableCell = styled("td", {
  padding: "1rem",
  border: "none",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",

  variants: {
    type: {
      data: {
        flex: 1,
      },
      action: {
        flex: "0 0 10px",
      },
    },
    align: {
      top: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
    },
  },

  defaultVariants: {
    align: "center",
  },

  "@media (max-width: 768px)": {
    padding: "0.25rem",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
});

export const DataItemContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%",
  gap: "1rem",

  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "0.15rem",
  },
});

export const DataItem = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

export const Header = styled("span", {
  color: "$neutral-500",
  marginBottom: "0.25rem",
  fontSize: "$xs",

  "@media (max-width: 768px)": {
    fontSize: "$xxs",
    textAlign: "left",
  },
});

export const DataSpan = styled("span", {
  color: "$black",
  fontSize: "$sm",
  fontWeight: "bold",
  wordBreak: "break-word",

  "@media (max-width: 768px)": {
    fontSize: "$xs",
    textAlign: "left",
  },
});

export const ActionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "$2",
  width: "100%",

  "@media (max-width: 768px)": {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: "0.5rem",
  },
});

export const IconButton = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px",
  borderRadius: "6px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$neutral200",
  },

  svg: {
    width: "20px",
    height: "20px",
    color: "#668099",

    "&:hover": {
      color: "$primary",
    },
  },
});
