import Filter from "../../Components/Filter/Filter";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Tables";
import Widgets from "../../Components/Widgets/Widgets";
import {ChangeEvent, useCallback, useState} from 'react';
import { Funnel } from "../../Components/Filter/Funnel";
import './Dashboard.scss';
const Dashboard = () => {
    const [filter , setFilter] = useState<Funnel>({organisation: ''});
    const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) =>{
        setFilter(current => ({
            ...current,
            [e.target.name]: e.target.value
        }))
        e.preventDefault()
    }, [])
    return ( 
        <div className="dashboard">
            <Sidebar/>
            <div className="dashboard-container">
                <Navbar/>
                <div className="dashboard-inner">
                    <div className="dashboard-title">
                        <p>Users</p>
                    </div>
                    <div className="widgets">
                        <Widgets type="users"/>
                        <Widgets type="active"/>
                        <Widgets type="loans"/>
                        <Widgets type="savings"/>
                    </div>
                    <div className="tables">
                        <Table onFilterChange={onFilterChange}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;