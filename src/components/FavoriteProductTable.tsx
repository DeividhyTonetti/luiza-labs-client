import { Table, ScrollArea } from '@mantine/core';

interface TableReviewsProps {
  data: {
    title: string;
    price: string
    image: string
    reviewLink: string
  }[];
}

const FavoriteProductTable = ({ data }: TableReviewsProps) => {
  const rows = data.map((row) => {
   
    return (
      <tr key={row.title}>
        <td>
          {row.title}
        </td>
        <td>{row.price}</td>
        <td>
          {row.image}
        </td>
        <td>
          {row.reviewLink}
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th> Título </th>
            <th> Preço </th>
            <th> Image </th>
            <th> Link do Review </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default FavoriteProductTable