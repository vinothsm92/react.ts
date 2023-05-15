import React, { memo } from 'react';
import DataTable from '../table/table';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../comp/comp';
import { DialogTitleProps, IModalProps } from './types';
import { IAppContextType } from '../comp/types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, width: '100%' }} {...other} >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

function CustomizedDialogs({ isOpenModal, handleClick, columns, title }: IModalProps) {
    const { appData, modalTitle } = React.useContext(AppContext) as IAppContextType;
    return (
        <div>
            <BootstrapDialog
                fullWidth
                onClose={handleClick}
                aria-labelledby="customized-dialog-title"
                open={isOpenModal}
                className='testasdf'
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClick}>
                    {modalTitle}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <DataTable data={appData} columns={columns} title={title}></DataTable>
                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}

export default memo(CustomizedDialogs);