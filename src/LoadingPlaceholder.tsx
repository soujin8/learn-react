import React from "react";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const LoadingPlaceHolder: React.FC<{}> = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LoadingPlaceHolder;
