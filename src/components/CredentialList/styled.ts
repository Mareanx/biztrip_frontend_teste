import { styled } from "../../styles/stitches.config";

export const Table = styled("table", {
  width: "100%",
  maxWidth: "1440px",
  marginTop: "0 auto",
  borderCollapse: "collapse",
  backgroundColor: "$white",
  borderRadius: "$md",
});
export const TableBody = styled("tbody", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const Wrapper = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "$9",
  backgroundColor: "$neutral-100",
});

export const TableRow = styled("tr", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%",
  backgroundColor: "$primaryForeground",
  border: "2px solid",
  borderRadius: "8px",
  transition: "border 0.3s ease, box-shadow 0.3s ease",

  variants: {
    active: {
      true: {
        border: "2px solid $primary", // Azul para ativo
      },
      false: {
        border: "none", // Cinza para inativo
      },
    },
  },
});

export const TableCell = styled("td", {
  padding: "2rem",
  color: "$black",
  border: "none",
  display: "flex",
  justifyContent: "flex-start",

  variants: {
    type: {
      data: {
        flex: 1,
      },
      action: {
        flex: "0 0 200px",
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
});

export const DataItemContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
});

export const DataItem = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const Header = styled("span", {
  color: "$neutral-500",
  marginBottom: "$4",
  fontSize: "$xs",
});

export const DataSpan = styled("span", {
  color: "$black",
  fontSize: "$sm",
  fontWeight: "bold",
});

export const ActionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "$2",
  margin: 0,
  padding: 0,
  width: "100%",
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
export const ProviderStatus = styled("span", {
  fontSize: "$xs",
  variants: {
    active: {
      true: { color: "$success" },
      false: { color: "$error" },
    },
  },
});

export const StatusLabel = styled("span", {
  fontWeight: 500,
  variants: {
    active: {
      true: { color: "$success" },
      false: { color: "$error" },
    },
  },
});
