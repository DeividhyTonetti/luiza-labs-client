import { Table, ScrollArea } from '@mantine/core';

interface TableReviewsProps {
  data: {
    id: string
    name: string;
    email: string;
  }[];
}

const CustomerTable = ({ data }: TableReviewsProps) => {
  const rows = data.map((row) => {
    return (
      <tr key={row.id}>
        <td>
          {row.name}
        </td>
        <td>
          {row.email}
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table verticalSpacing="xs">
        <thead>
          <tr>
            <th> Nome do Cliente </th>
            <th> Email </th>   
          </tr>
        </thead>
        <tbody> {rows} </tbody>
      </Table>
    </ScrollArea>
  );
}

export default CustomerTable