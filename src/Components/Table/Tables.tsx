import './Tables.scss';
import { ChangeEvent,  ReactElement } from 'react';
import {useState, useEffect} from 'react';
import {BiFilter, BiDotsVerticalRounded, BiUserX,BiUserCheck} from 'react-icons/bi'
import {BsEye} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useFetch } from '../../useFetch';
import Filter from "../../Components/Filter/Filter";

 export interface userdata {
    id: number;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: number;
    createdAt: string;

}
interface Props{
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const Tables = ({onFilterChange}: Props): ReactElement => {
    const[state, setState] = useState(false)
    const [open, setOpen] = useState<boolean>(false);
    const [Data, loading] = useFetch<userdata[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users', [])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    if (loading) return <p>Loading.....</p>
    const toggle =()=>{
        setState(!state)
    }
    const handleDropDownFocus=(state:boolean) =>{
        setOpen(!state)
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return ( 
        <div className="table" >
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 640 }} className='tablecontainer'>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow className='tablerow'>
                            <TableCell className='tablecell-head'>ORGANISATION<span className='filter-icon' onClick={e => handleDropDownFocus(open)}><BiFilter/></span></TableCell>
                            <TableCell className='tablecell-head'>USERNAME<span className='filter-icon' onClick={e => handleDropDownFocus(open)}><BiFilter/></span></TableCell>
                            <TableCell className='tablecell-head'>EMAIL<span className='filter-icon' onClick={e => handleDropDownFocus(open)}><BiFilter/></span></TableCell>
                            <TableCell className='tablecell-head'>PHONE NUMBER<span className='filter-icon' onClick={e => handleDropDownFocus(open)}><BiFilter/></span></TableCell>
                            <TableCell className='tablecell-head'>DATE JOINED<span className='filter-icon' onClick={e => handleDropDownFocus(open)}><BiFilter/></span></TableCell>
                            <TableCell className='tablecell-head'>STATUS<span className='filter-icon' onClick={e => handleDropDownFocus(open)}><BiFilter/></span></TableCell>
                            <TableCell className='tablecell-head'></TableCell>
                        </TableRow>
                        {open && <Filter onChange={onFilterChange}/>}
                    </TableHead>
                    <TableBody>
                        {Data
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((data) => {
                            return (
                                // <Link to = {`/user/${data.id}`}>
                                <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                                        <TableCell className='tablecell-body'><Link to = {`/user/${data.id}`}>{data.orgName}</Link></TableCell>
                                        <TableCell className='tablecell-body'><Link to = {`/user/${data.id}`}>{data.userName}</Link></TableCell>
                                        <TableCell className='tablecell-body'><Link to = {`/user/${data.id}`}>{data.email}</Link></TableCell>
                                        <TableCell className='tablecell-body'><Link to = {`/user/${data.id}`}>{data.phoneNumber}</Link></TableCell>
                                        <TableCell className='tablecell-body'><Link to = {`/user/${data.id}`}>{data.createdAt}</Link></TableCell> 
                                        <TableCell className='tablecell-body'><button onClick={toggle} className={state ? 'toggle-active':'toggle-button'}>{state ? "Active": "Blacklisted"}</button></TableCell>
                                        <TableCell className='tablecell-body'><BiDotsVerticalRounded/></TableCell>
                                        
                                       
                                </TableRow>
                                // </Link>
                            );
                        })}
                        {/* {open &&
                                <ul className="actions">
                                <li><BsEye/><span>View Details</span></li>
                                <li><BiUserX/><span>Blacklist User</span></li>
                                <li><BiUserCheck/><span>Activate User</span></li>
                            </ul>
                        } */}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={Data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
     );
}
 
export default Tables;
