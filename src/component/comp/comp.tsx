import { createContext, memo, useCallback, useEffect, useMemo, useState } from 'react';
import DataTable from '../table/table';
import axios from 'axios';
import { MUIDataTableColumnDef } from 'mui-datatables';


import CustomizedDialogs from '../modal/modal';
import { IAppContextType, IAppData, IApplication } from './types';
export const AppContext = createContext<IAppContextType | null>(null);



function Comp({pgName}:{pgName:string}) {
    const [data, setData] = useState<IApplication[]>([]);
    const [appData, setAppData] = useState<IAppData[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const getAppData = useCallback((index: number) => {
        const appName = data[index].application;
        setModalTitle(appName);
        axios.get(`https://engineering-task.elancoapps.com/api/${pgName}/${appName}`).then(res => setAppData(res.data)).catch()
    }, [data, pgName])

    const handleClick = useCallback(() => {
        setIsOpenModal(!isOpenModal)
    }, [isOpenModal])

    const columns: MUIDataTableColumnDef[] = useMemo(() => [

        {
            name: 'sno',
            label: 'Sno'
        },
        {
            name: 'application',
            label: pgName
        }, {
            name: "",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex: number) => {
                    return (
                        <button onClick={() => {
                            handleClick();
                            getAppData(dataIndex);
                        }}>
                            view
                        </button>
                    );
                }
            }
        },
    ], [getAppData, handleClick, pgName]);




    useEffect(() => {
        try {
            axios.get(`https://engineering-task.elancoapps.com/api/${pgName}`).then(res => {
                const newData = res.data.map(function (val: string, index: number) {
                    return { sno: index + 1, application: val };
                })
                debugger
                setData(newData)
            }).catch()
        } catch (error) {

        }
    }, [pgName])

    const mAppData = useMemo(() => appData, [appData])

    const appDataColumn: MUIDataTableColumnDef[] = useMemo(() => [
        {
            name: 'ResourceGroup',
            label: 'Resource Group'
        },
        {
            name: 'ServiceName',
            label: 'Service Name'
        },
        {
            name: 'Cost',
            label: 'Cost'
        },
        {
            name: 'Date',
            label: 'Date'
        },
        {
            name: 'ResourceLocation',
            label: 'ResourceLocation'
        }, {
            name: 'UnitOfMeasure',
            label: 'Unit Of Measure'
        }
    ], []);



    return (<>
        <DataTable data={data} columns={columns} title={pgName}></DataTable>
        <AppContext.Provider value={{ appData: mAppData, modalTitle: modalTitle }}>
            <CustomizedDialogs handleClick={handleClick} isOpenModal={isOpenModal} columns={appDataColumn} title={'List'} />
        </AppContext.Provider>
    </>);
}

export default memo(Comp);