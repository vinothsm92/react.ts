import MUIDataTable from 'mui-datatables';
import { memo, useMemo } from 'react';
import { ITableProps } from './types';



function DataTable({ columns, data, title }: ITableProps) {

  const tData = useMemo(() => data, [data])
  return (
    <div className='App'>
      <MUIDataTable
        title={title}
        data={tData}
        columns={columns}
        options={{
          search: true,
          fixedHeader: true,
          selectableRows: 'none',
          selectableRowsOnClick: true,
        }}
      />
    </div>
  );
}

export default memo(DataTable)
